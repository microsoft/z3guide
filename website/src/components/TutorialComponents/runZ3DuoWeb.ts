import type { evalZ3JS } from '../../eval-z3/eval-z3';
import { type Z3HighLevel, Z3LowLevel } from 'z3-solver';
import type { init as initT, Model, Solver, BitVecNum, AstVector, Arith } from 'z3-solver';
declare let init: typeof initT;
declare let { Context, setParam }: Awaited<ReturnType<typeof init>>;
declare let Z3: ReturnType<typeof Context<'main'>>;

let evalZ3JSPromise: null | Promise<typeof evalZ3JS> = null;
// async function loadEvalZ3() {
//     // typescript is several megabytes of JS
//     // so don't load it until someone actually calls it
//     if (evalZ3JSPromise != null) {
//         return evalZ3JSPromise;
//     }
//     evalZ3JSPromise = new Promise((res, rej) => {
//         const script = document.createElement('script');
//         script.src = '/z3guide/eval-z3.js';
//         script.onload = () => {
//             // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//             // @ts-ignore eval-z3.js adds this binding to the global
//             // the name is defined in build.js
//             res(window.evalZ3Mod.evalZ3JS);
//         };
//         script.onerror = rej;
//         document.head.appendChild(script);
//     });
//     return evalZ3JSPromise;
// }

let Z3Promise: null | ReturnType<typeof init>;
async function loadZ3() {
    if (Z3Promise != null) {
        return Z3Promise;
    }
    Z3Promise = init();
    return Z3Promise;
}

export default async function runZ3DuoWeb(user_input: string, secret_input: string): Promise<string> {
    let output = '';
    let error = '';
    try {
        const { Z3: Z3Core, Context } = await loadZ3();
        const s1 = new Z3.Solver(user_input);
        const s2 = new Z3.Solver(secret_input);
        const not_user = Z3.Not(Z3.And(s1.assertions()));
        const not_secret = Z3.Not(Z3.And(s2.assertions()));
        s2.add(not_user);
        s1.add(not_secret);
        const secret_not_user = await s2.check();
        const user_not_secret = await s1.check();
        if (secret_not_user === "sat") {
            output = `${s2.model().sexpr()} satisfies the secret formula but not yours`;
        } else if (user_not_secret === "sat") {
            output = `${s2.model().sexpr()} satisfies the your formula but not the secret formula`;
        } else {
            if (secret_not_user !== "unsat" || user_not_secret !== "unsat") {
                error = `Unexpected result from Z3: ${secret_not_user} and ${user_not_secret}`;
            } else {
                output = `${s2.model().sexpr()} satisfies neither your formula nor the secret formula`;
            }
        }
    } catch (e) {
        // error with running z3
        error = e.message ?? 'Error message is empty';
    }
    // we are guaranteed to have non-undefined output and error
    return JSON.stringify({ output: String(output), error: error });
}
