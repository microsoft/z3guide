#!/usr/bin/env python3

import argparse
import re
import subprocess
from pathlib import Path

MODULE_PATTERN = re.compile(r"^\[module\]\s+([^,\s]+)", re.MULTILINE)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Generate complete Markdown parameter documentation from Z3.",
    )
    parser.add_argument("z3", type=Path, help="Path to the Z3 executable")
    parser.add_argument("output", type=Path, help="Markdown file to generate")
    return parser.parse_args()


def run_z3(z3: Path, argument: str) -> str:
    return subprocess.run(
        [z3, argument],
        check=True,
        capture_output=True,
        text=True,
    ).stdout.replace("\r\n", "\n")


def main() -> None:
    args = parse_args()
    modules = ["global", *MODULE_PATTERN.findall(run_z3(args.z3, "-pm"))]
    if len(modules) == 1:
        raise RuntimeError("Z3 did not report any parameter modules")

    sections = [run_z3(args.z3, f"-pmmd:{module}") for module in modules]
    args.output.parent.mkdir(parents=True, exist_ok=True)
    with args.output.open("w", encoding="utf-8", newline="\n") as output:
        output.write("Z3 Options\n\n")
        output.write("".join(sections))


if __name__ == "__main__":
    main()
