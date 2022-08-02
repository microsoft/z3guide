import type { evalZ3JS } from '../../eval-z3/eval-z3';
import { init } from 'z3-solver';

let evalZ3JSPromise: null | Promise<typeof evalZ3JS> = null;
async function loadEvalZ3() {
    // typescript is several megabytes of JS
    // so don't load it until someone actually calls it
    if (evalZ3JSPromise != null) {
        return evalZ3JSPromise;
    }
    evalZ3JSPromise = new Promise((res, rej) => {
        let script = document.createElement('script');
        script.src = '/z3guide/eval-z3.js';
        script.onload = () => {
            // @ts-ignore eval-z3.js adds this binding to the global
            // the name is defined in build.js
            res(window.evalZ3Mod.evalZ3JS);
        };
        script.onerror = rej;
        document.head.appendChild(script);
    });
    return evalZ3JSPromise;
}

let Z3Promise: null | ReturnType<typeof init>;
async function loadZ3() {
    if (Z3Promise != null) {
        return Z3Promise;
    }
    Z3Promise = init();
    return Z3Promise;
}

export default async function runZ3JSWeb(input: string): Promise<string> {
    let output, error;
    try {
        let Z3 = await loadZ3();
        let evalZ3JS = await loadEvalZ3();
        output = await evalZ3JS(Z3, input);
    } catch (e) {
        // error with running z3
        error = e.message;
    } finally {
        return JSON.stringify({ output: output, error: error });
    }
}
