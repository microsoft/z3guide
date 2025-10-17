from __future__ import annotations

import dataclasses
import logging
import textwrap
from concurrent import interpreters  # this requires python >= 3.14

logger = logging.getLogger(__name__)


@dataclasses.dataclass
class ExecutionResult:
    stdout: str
    stderr: str
    error: interpreters.InterpreterError | SyntaxError | None

    @property
    def is_success(self) -> bool:
        return self.error is None

    @property
    def is_failure(self) -> bool:
        return self.error is not None


class SubinterpreterExecutor:
    def __init__(self) -> None:
        self._interpreter = interpreters.create()
        self._stdout_q = interpreters.create_queue()
        self._stderr_q = interpreters.create_queue()
        self._stdout_id = self._stdout_q.id
        self._stderr_id = self._stderr_q.id

    @staticmethod
    def _get_queue_contents_as_str(queue: interpreters.Queue) -> str:
        contents = ""
        try:
            while True:
                contents += queue.get_nowait()
        except interpreters.QueueEmpty:
            return contents

    def execute_code(self, code: str) -> ExecutionResult:
        error: interpreters.InterpreterError | SyntaxError | None = None
        code_prefix = textwrap.dedent(f"""
        ### CODE PREFIX - START
        import sys
        from concurrent import interpreters


        class StreamQueue:
            def __init__(self, queue: interpreters.Queue):
                self._queue = queue

            def write(self, msg):
                self._queue.put(msg)


        stdout_q = StreamQueue(interpreters.Queue({self._stdout_id}))
        stderr_q = StreamQueue(interpreters.Queue({self._stderr_id}))

        sys.stdout = stdout_q
        sys.stderr = stderr_q

        ### CODE PREFIX - END
        """)
        wrapped_code = code_prefix + code
        try:
            self._interpreter.exec(wrapped_code)
        except (interpreters.InterpreterError, SyntaxError) as e:
            # We also need to catch SyntaxError because of a peculiar behaviour
            # of subinterpreters.
            #
            # see: https://github.com/python/cpython/issues/139324
            error = e
        # gather stdout and stderr contents
        stdout = self._get_queue_contents_as_str(self._stdout_q)
        stderr = self._get_queue_contents_as_str(self._stderr_q)
        return ExecutionResult(stdout, stderr, error)
