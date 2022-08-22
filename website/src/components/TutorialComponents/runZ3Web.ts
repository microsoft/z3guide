import loadZ3 from "./loadZ3";


export default async function runZ3Web(input: string): Promise<string> {

    // init z3
    const z3p = loadZ3();

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