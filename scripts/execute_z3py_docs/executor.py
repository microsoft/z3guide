from __future__ import annotations

import dataclasses
import logging
import subprocess
import sys

logger = logging.getLogger(__name__)


@dataclasses.dataclass
class ExecutionResult:
    stdout: str
    stderr: str
    error: Exception | None

    @property
    def is_success(self) -> bool:
        return self.error is None

    @property
    def is_failure(self) -> bool:
        return self.error is not None


class SubinterpreterExecutor:
    # Despite the name (kept for compatibility), this now uses subprocess
    # execution. The subinterpreter approach caused segfaults with C extensions
    # (such as z3-solver) that use module-level global state, because
    # Python 3.14 subinterpreters share the underlying C library state.
    # Running each snippet in a separate subprocess fully isolates their state.

    def execute_code(self, code: str) -> ExecutionResult:
        try:
            result = subprocess.run(
                [sys.executable, "-c", code],
                capture_output=True,
                text=True,
                timeout=60,
            )
        except subprocess.TimeoutExpired:
            return ExecutionResult(
                stdout="",
                stderr="",
                error=TimeoutError("Snippet execution timed out after 60 seconds"),
            )
        error: Exception | None = None
        if result.returncode != 0:
            error = RuntimeError(
                f"Process exited with code {result.returncode}"
            )
        return ExecutionResult(stdout=result.stdout, stderr=result.stderr, error=error)
