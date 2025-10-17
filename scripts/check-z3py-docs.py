#!/usr/bin/env python
#
# This script performs a simple check for the python section of the z3 guide
# (https://microsoft.github.io/z3guide/).
#
# The script works as follows:
# - it enumerates all the `.md` files in a directory taken from command line, or
#   in `website/docs-programming/02 - Z3 Python - Readonly` if none is given;
# - for each of them, it looks for code sections, selecting those whose syntax
#   highlighting is set as `z3-python` (let's call them "z3 snippets"), and
#   ignoring the others;
# - since each z3 snippet implicitly assumes that the user has imported the
#   whole z3 namespace, it prepends a `from z3 import *` statement to each
#   snippet;
# - the snippet is then executed in a Python 3.14 subinterpreter (see
#   https://docs.python.org/3/library/concurrent.interpreters.htm), so that no
#   new process needs to be spawned, and the global namespace is kept pristine.
#   `stdout` and `stderr`, and eventual unexpected terminations caused by
#   unhandled exceptions are captured.
#
# The program produces a log (on stderr), while its main result is a Github
# flavoured Markdown report on stdout that is supposed to the shown in the
# workflow window of the CI screen.
#
# In the current version, a test on a z3 snippet is considered successful if its
# execution merely terminates without exceptions or syntax errors. No check is
# performed on the expected output yet.
#
# Preliminary discussion at: https://github.com/microsoft/z3guide/pull/206#issuecomment-3311465758
#
# Requires python >= 3.14

import argparse
import logging
import sys
from pathlib import Path

from execute_z3py_docs import main

logger = logging.getLogger(__name__)
SCRIPT_DIR = Path(__file__).parent.resolve()
DEFAULT_BASE_PATH = (SCRIPT_DIR / ".." / "website" / "docs-programming" / "02 - Z3 Python - Readonly").resolve()

def _parse_args(argv: list[str]) -> argparse.Namespace:
    """If passing sys.argv here, do not include argv[0]!
    Call like this:
    _parse_args(sys.argv[1:])
    """
    parser = argparse.ArgumentParser(
        description="Parses a single Markdown file, or a directory of files, extracts z3-python snippets and executes them",
    )
    parser.add_argument(
        "-r",
        "--recursive",
        action="store_true",
        help="if given and ARG is a directory, recursively descend in its subdirectories",
    )
    parser.add_argument(
        "-q",
        "--quiet",
        action="store_true",
        help="if given, do not print the markdown report on stdout. Just show logs on stderr",
    )
    parser.add_argument(
        "file_or_dir",
        nargs="?",
        default=DEFAULT_BASE_PATH,
        help=f'An existing file or directory. If it is a directory, it will iterate through all "*.md" files contained within. If not given, it will default to "{DEFAULT_BASE_PATH}"',
    )
    return parser.parse_args(argv)


if __name__ == "__main__":
    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s %(levelname)s %(name)s: %(message)s",
    )
    args = _parse_args(sys.argv[1:])
    base_path = Path(args.file_or_dir)
    if isinstance(args.file_or_dir, Path):
        # we configure argparse to return a string if the user gave an argument.
        # A Path is returned only when the user did not specify anything.
        logger.info('No path given, using "%s" as default', base_path)
    try:
        sys.exit(main(base_path, recursive=args.recursive, quiet=args.quiet))
    except KeyboardInterrupt:
        logger.warning("CTRL+C hit. Exiting...")
        sys.exit(154)
