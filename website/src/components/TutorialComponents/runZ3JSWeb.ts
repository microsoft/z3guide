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
        const script = document.createElement('script');
        script.src = '/z3guide/eval-z3.js';
        script.onload = () => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
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
    let output = '';
    let error = '';
    let timeStart, timeEnd: number = undefined;

    const Z3 = await loadZ3();
    const timeout = 10000;

    try {
        Z3.Z3.global_param_set('timeout', String(timeout));
        timeStart = (new Date()).getTime();
        const evalZ3JS = await loadEvalZ3();
        output = await evalZ3JS(Z3, input) ?? '';
    } catch (e) {
        // error with running z3
        error = e.message ?? 'Error message is empty';
        if (timeStart) {
            timeEnd = (new Date()).getTime();
            if (timeEnd - timeStart >= timeout) {
                error = error + '\nZ3 timeout\n'
            }
        }
    }
    // we are guaranteed to have non-undefined output and error
    return JSON.stringify({ output: String(output), error: error });
}
