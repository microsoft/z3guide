import loadZ3 from "./loadZ3";


export default async function runZ3Web(input: string): Promise<string> {

    // init z3
    const z3p = loadZ3();

    const { Z3 } = await z3p;

    // done on every snippet
    const cfg = Z3.mk_config();
    const ctx = Z3.mk_context(cfg);
    Z3.del_config(cfg);

    const d = new Date();
    const time_start = d.getTime();
    Z3.global_param_set('timeout', '10000')


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
        const time_end = (new Date()).getTime();
        if (time_end - time_start >= 10000) 
            output = output + '\nZ3 timeout\n' + (time_end - time_start) + '\n'
    }

    // we are guaranteed to have non-undefined output and error
    return JSON.stringify({ output: String(output), error: error });

}