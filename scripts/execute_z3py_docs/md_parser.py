from __future__ import annotations

import logging
from typing import TYPE_CHECKING, override

import mistletoe
import mistletoe.ast_renderer

if TYPE_CHECKING:
    from collections.abc import Generator
    from pathlib import Path

logger = logging.getLogger(__name__)


class _RawAstRenderer(mistletoe.ast_renderer.AstRenderer):
    @override
    def render(self, token) -> dict:
        return mistletoe.ast_renderer.get_ast(token)


def _z3_snippets_from_ast(mistletoe_ast: dict) -> Generator[tuple[int, str]]:
    for child in mistletoe_ast["children"]:
        if child["type"] != "CodeFence":
            continue
        if child["language"] != "z3-python":
            continue
        if len(child["children"]) != 1:
            msg = f"The list of children of the node should contain a single element instead of {len(child['children'])}: {child['children']}"
            raise RuntimeError(msg)
        code_block = child["children"][0]
        if code_block["type"] != "RawText":
            msg = f'The type of the code block should be "RawText" instead of "{code_block["type"]}"'
            raise RuntimeError(msg)
        z3_snippet = code_block["content"]
        yield (child["line_number"], z3_snippet)


def extract_z3_snippets(md_file: Path) -> Generator[tuple[int, str]]:
    md_file = md_file.resolve()
    logger.debug("Opening file %s", md_file)
    with md_file.open("r") as f_in:
        rendered = mistletoe.markdown(f_in, renderer=_RawAstRenderer)
    yield from _z3_snippets_from_ast(rendered)
