let _loadPyodideScriptPromise: Promise<any> | null = null;
async function loadPyodideScript(): Promise<any> {
    debugger
    if (_loadPyodideScriptPromise) return _loadPyodideScriptPromise
    return _loadPyodideScriptPromise = new Promise((resolve, reject) => {
        console.log(`loading pyodide script`);
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js';
        script.onload = () => resolve(globalThis.loadPyodide);
        script.onerror = (e) => {
            console.error(e)
            reject(new Error('Failed to load Pyodide script'));
        }
        document.head.appendChild(script);
    });
}

async function runZ3PYWeb(input: string): Promise<string> {
    const loadPyodide: any = await loadPyodideScript()
    //const { loadPyodide } = require('pyodide');
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
        console.error(e)
        error = e.message ?? 'Error message is empty';
    }

    return JSON.stringify({ output: String(output), error: error });
}

export default runZ3PYWeb;