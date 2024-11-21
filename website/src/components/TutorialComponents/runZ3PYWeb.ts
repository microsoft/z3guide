let _loadPyodideScriptPromise: Promise<any> | null = null;

async function loadPyodideScript(): Promise<any> {
  return new Promise((resolve, reject) => {
    console.log(`loading pyodide script`);
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js";
    script.onload = () => resolve(globalThis.loadPyodide);
    script.onerror = (e) => {
      console.error(e);
      reject(new Error("Failed to load Pyodide script"));
    };
    document.head.appendChild(script);
  });
}

async function loadZ3Pyodide() {
  if (_loadPyodideScriptPromise) return _loadPyodideScriptPromise;

  return (_loadPyodideScriptPromise = new Promise(async (resolve) => {
    const loadPyodide: any = await loadPyodideScript();
    //const { loadPyodide } = require('pyodide');
    let pyodide = await loadPyodide();
    await pyodide.loadPackage("micropip");
    const micropip = pyodide.pyimport("micropip");
    console.log(`loading z3`);
    await micropip.install(
      "https://microsoft.github.io/z3guide/z3_solver-4.13.4.0-py3-none-pyodide_2024_0_wasm32.whl"
    );
    console.log(`pyodide ready`);
    resolve(pyodide);
  }));
}

async function runZ3PYWeb(input: string): Promise<string> {
  const pyodide = await loadZ3Pyodide();

  let output = "";
  let error = "";

  try {
    if (!input.includes("from z3 import *"))
      input = `from z3 import *\n${input}`;
    console.log(`running python code: ${input}`);
    pyodide.setStdout({
      batched: (msg) => {
        output += msg + "\n";
        console.debug(msg)
      },
    });
    pyodide.setStderr({
      batched: (msg) => {
        output += msg + "\n";
        console.debug(msg)
      },
    });
    pyodide.runPython(input);
  } catch (e) {
    console.error(e);
    error = e.message ?? "Error message is empty";
  }

  return JSON.stringify({ output: String(output), error: error });
}

export default runZ3PYWeb;
