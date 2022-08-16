declare global {
    interface Window { z3Promise: any } // use any to escape typechecking
}

export default async function runZ3Web(input: string): Promise<string> {

    const z3 = require('z3-solver');

    // init z3
    const z3p = window.z3Promise || (() => {
        return window.z3Promise = z3.init();
    })();

    const { Z3 } = await z3p;

    // done on every snippet
    const cfg = Z3.mk_config();
    const ctx = Z3.mk_context(cfg);
    Z3.del_config(cfg);

    let output, error = undefined;

    try {
        output = await Z3.eval_smtlib2_string(ctx, input);
    } catch (e) {
        // error with running z3
        error = e.message;
    } finally {
        Z3.del_context(ctx);
        return JSON.stringify({ output: String(output), error: error });
    }
}