import sys

_MINIMUM_PYTHON_VERSION = (3, 14, 0)
if sys.version_info < _MINIMUM_PYTHON_VERSION:
    msg = f"Minimum required python version is: {_MINIMUM_PYTHON_VERSION}. You appear to be using {sys.version_info}"
    raise RuntimeError(msg)


import dataclasses
import logging
import sys
from concurrent import interpreters
from pathlib import Path

from . import executor, md_parser

logger = logging.getLogger(__name__)


@dataclasses.dataclass(kw_only=True)
class SnippetExecutionSummary:
    """Execution summary for the execution of a single snippet"""

    file_name: str
    line_number: int
    snippet_id: int
    source_code: str
    stdout: str
    stderr: str
    # We also need to catch SyntaxError because of a peculiar behaviour of
    # subinterpreters. See https://github.com/python/cpython/issues/139324
    error: interpreters.ExecutionFailed | SyntaxError | None

    @property
    def was_successful(self) -> bool:
        return self.error is None

    def long_repr(self) -> str:
        s = "<details>\n"
        s += "<summary>Source code (click to open):</summary>\n\n"
        s += "```python\n"
        s += f"{self.source_code}\n"
        s += "```\n"
        s += "</details>\n\n"
        s += "Stdout:\n"
        s += "```\n"
        s += f"{'[empty]' if self.stdout == '' else self.stdout}\n"
        s += "```\n"
        s += "Stderr:\n"
        s += "```\n"
        s += f"{'[empty]' if self.stderr == '' else self.stderr}\n"
        s += "```\n"
        s += "Error:\n"
        s += "```\n"
        s += f"{'[no error]' if self.error is None else self.error}\n"
        s += "```\n"
        return s


@dataclasses.dataclass(kw_only=True)
class FinalSummary:
    markdown: str
    error_count: int
    snippet_count: int
    file_count: int


def do_final_summary(
    summaries: dict[Path, list[SnippetExecutionSummary]],
) -> FinalSummary:
    error_count = 0
    snippet_count = 0
    s = ""
    for file_path, stats_list in summaries.items():
        s += f"## {file_path.name}\n"
        for execution_stats in stats_list:
            snippet_count += 1
            if execution_stats.was_successful:
                details_tag = "details"
                summary_contents = "<strong>success</strong> ✅"
            else:
                error_count += 1
                details_tag = "details open"
                summary_contents = "<strong>failure</strong> ❌"
            s += f"<{details_tag}>"
            s += f"<summary>{execution_stats.file_name}:<strong>{execution_stats.line_number}</strong>, snippet <strong>#{execution_stats.snippet_id}</strong>: {summary_contents}</summary>\n\n"
            s += f"{execution_stats.long_repr()}\n"
            s += "</details>\n\n"
    # prepend error count
    s = (
        f"# Execution summary\n"
        f"There were **{error_count}** errors over **{snippet_count}** snippets in **{len(summaries)}** Markdown files.\n\n"
    ) + s
    return FinalSummary(
        markdown=s,
        error_count=error_count,
        snippet_count=snippet_count,
        file_count=len(summaries),
    )


def execute_file(md_file: Path) -> list[SnippetExecutionSummary]:
    count_success = 0
    stats_list: list[SnippetExecutionSummary] = []
    i = 0
    for i, (line_number, z3_snippet) in enumerate(
        md_parser.extract_z3_snippets(md_file),
        start=1,
    ):
        logger.debug(
            'Executing snippet #%d in "%s:%d"',
            i,
            md_file,
            line_number,
        )
        # Execute the z3_snippet program in a python 3.14 subintepreter.
        src = "from z3 import *\n\n" + z3_snippet
        result = executor.SubinterpreterExecutor().execute_code(src)
        stats_list.append(
            SnippetExecutionSummary(
                file_name=md_file.name,
                line_number=line_number,
                snippet_id=i,
                source_code=z3_snippet,
                stdout=result.stdout,
                stderr=result.stderr,
                error=result.error,
            ),
        )
        log_template = '"%s:%d", snippet #%d: %s'
        if result.is_success:
            log_verb = logger.info
            count_success += 1
        else:
            log_verb = logger.error
        log_verb(
            log_template,
            md_file,
            line_number,
            i,
            "SUCCESS" if result.is_success else "FAIL",
        )
    if i == 0:
        logger.warning('No z3 snippets found in "%s"', md_file)
    logger.info(
        'FINISHED VALIDATING "%s". %d out of %d snippets were successful',
        md_file.name,
        count_success,
        i,
    )
    return stats_list


def main(target: Path, *, recursive: bool, quiet: bool) -> int:
    target = target.resolve()
    if not (target.is_dir() or target.is_file()):
        logger.error('"%s" is not an existing file or directory', target)
        return 1
    if target.is_dir():
        logger.info(
            '"%s" is a directory: we will iterate %sover all the .md files it contains',
            target,
            "recursively " if recursive else "",
        )
        target_files = target.glob("**/*.md") if recursive else target.glob("*.md")
    else:
        target_files = (target,)
    summaries: dict[Path, list[SnippetExecutionSummary]] = {}
    for md_file in target_files:
        if not md_file.is_file():
            # there could be cases of directories whose name ends in ".md".
            # For example mercurial created one under my feet. Let's protect
            # ourselves.
            continue
        summaries[md_file] = execute_file(md_file)
    final_summary = do_final_summary(summaries)
    log_verb = logger.info if final_summary.error_count == 0 else logger.error
    log_verb(
        "There were %d errors over %d snippets in %d Markdown files",
        final_summary.error_count,
        final_summary.snippet_count,
        final_summary.file_count,
    )
    if quiet:
        logger.debug("quiet mode: the markdown summary will not be printed")
    else:
        print(final_summary.markdown)
    return 0 if final_summary.error_count == 0 else 1
