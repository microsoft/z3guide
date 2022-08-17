import { type Z3LowLevel, type Z3HighLevel } from 'z3-solver';

declare global {
    interface Window { z3Promise: Promise<Z3LowLevel & Z3HighLevel> } // use any to escape typechecking
}

export default async function runZ3Web(input: string): Promise<string> {

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const z3 = require('z3-solver');

    // init z3
    const z3p: Promise<Z3HighLevel & Z3LowLevel> = window.z3Promise || (() => {
        return window.z3Promise = z3.init();
    })();

    const { Z3 } = await z3p;

    // done on every snippet
    const cfg = Z3.mk_config();
    const ctx = Z3.mk_context(cfg);
    Z3.del_config(cfg);

    let output = '';
    let error = '';

    try {
        output = await Z3.eval_smtlib2_string(ctx, input) ?? '';
    } catch (e) {
        // error with running z3
        error = e.message ?? 'Error message is empty';
    } finally {
        Z3.del_context(ctx);
    }
    // we are guaranteed to have non-undefined output and error
    return JSON.stringify({ output: String(output), error: error });

}