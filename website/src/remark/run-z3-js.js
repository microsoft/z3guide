const { stdout, stderr } = require('node:process');
const { init } = require('z3-solver');
const { readJsonSync } = require('fs-extra');
const { lineHeight } = require('@mui/system');

async function runZ3File(inputFile) {

    // if the following fails then there is a bug in our program
    const originalInput = readJsonSync(inputFile).input;

    // add `return ` to the beginning of the last line of the input
    // because we are wrapping the input inside an async function
    const lines = originalInput.trim().split('\n'); // remove extra whitespace first
    const lastLine = `return ${lines[lines.length - 1]}`;
    const withReturn = `${lines.slice(0, lines.length - 1).join('\n')}\n${lastLine}`;

    const { Context, em } = await init();
    const Z3 = new Context('main');

    try {
        const func = eval(`(async () => { ${withReturn} })`);
        const res = await func();
        stdout.write(res);
    } catch (e) {
        stderr.write(e.message);
    } finally {
        em.PThread.terminateAllThreads();
    }
}

const inputFile = process.argv[2];

if (!inputFile) {
    throw new Error('Usage: node run-z3-js.js <input_file>');
}

(async () => await runZ3File(inputFile))();