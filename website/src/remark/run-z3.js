// TODO: factor into an npm package
const { stdout, stderr } = require('node:process');
const { init } = require('z3-solver');

let _initializeZ3Promise;
async function initializeZ3() {
    if (!_initializeZ3Promise)
        _initializeZ3Promise = await init();
    return _initializeZ3Promise;
}

async function runZ3(inputObj) {

    const input = JSON.parse(inputObj).input;

    const { em, Z3 } = await initializeZ3();
    // done on every snippet
    const cfg = Z3.mk_config();
    const ctx = Z3.mk_context(cfg);
    Z3.del_config(cfg);

    try {
        output = await Z3.eval_smtlib2_string(ctx, input);
        stdout.write(output);
    } catch (e) {
        // just let it blow up
        stderr.write(e.message);

    } finally {
        // try {
        Z3.del_context(ctx);
        em.PThread.terminateAllThreads();
    }
}

if (process.argv.length < 2) {
    throw new Error('Usage: node run-z3.js <stringified_JSON_for_input>');
}

const input = process.argv[2] ?? JSON.stringify({
    input:
        `(declare-const a Int)
(declare-fun f (Int Bool) Int)
(assert ( a 10))
(assert ( (f a true) 100))
(check-sat)
(get-model)`});

// use the second snippet in the tutorial for testing

(async () => await runZ3(input))();