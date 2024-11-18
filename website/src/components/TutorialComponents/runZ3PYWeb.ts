import { loadPyodide } from 'pyodide';

async function runZ3PYWeb(input: string): Promise<string> {
    let pyodide = await loadPyodide();
    await pyodide.loadPackage("micropip");
    const micropip = pyodide.pyimport("micropip");
    await micropip.install("https://microsoft.github.io/z3guide/z3_solver-4.13.4.0-py3-none-pyodide_2024_0_wasm32.whl");

    let output = '';
    let error = '';

    try {
        const result = pyodide.runPython(input);
        output = result ?? '';
    } catch (e) {
        error = e.message ?? 'Error message is empty';
    }

    return JSON.stringify({ output: String(output), error: error });
}

export default runZ3PYWeb;
