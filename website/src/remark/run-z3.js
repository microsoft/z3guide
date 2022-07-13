// TODO: factor into an npm package
const { stdout, stderr } = require('node:process');
const { init } = require('z3-solver');
const { readJsonSync } = require('fs-extra');

async function runZ3File(inputFile) {

    // if the following fails then there is a bug in our program
    const input = readJsonSync(inputFile).input;

    const { em, Z3 } = await init();
    // done on every snippet
    const cfg = Z3.mk_config();
    const ctx = Z3.mk_context(cfg);
    Z3.del_config(cfg);

    try {
        const output = await Z3.eval_smtlib2_string(ctx, input);
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


const inputFile = process.argv[2];

if (!inputFile) {
    throw new Error('Usage: node run-z3.js <input_file>');
}

(async () => await runZ3File(inputFile))();