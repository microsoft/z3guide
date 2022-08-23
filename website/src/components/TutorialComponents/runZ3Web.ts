import loadZ3 from "./loadZ3";


export default async function runZ3Web(input: string): Promise<string> {

    // init z3
    const z3p = loadZ3();

    const { Z3 } = await z3p;

    // done on every snippet
    const cfg = Z3.mk_config();
    const ctx = Z3.mk_context(cfg);
    Z3.del_config(cfg);

    const timeStart = (new Date()).getTime();
    const timeout = 10000;

    Z3.global_param_set('timeout', String(timeout));

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

    if ((/unknown/).test(output)) {
        const timeEnd = (new Date()).getTime();
        if (timeEnd - timeStart >= timeout) {
            output = output + '\nZ3 timeout\n'
        }
    }

    // we are guaranteed to have non-undefined output and error
    return JSON.stringify({ output: String(output), error: error });

}