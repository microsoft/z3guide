'use strict';
const { stdout, stderr } = require('node:process');
const { init } = require('z3-solver');
const { readJsonSync } = require('fs-extra');
const { evalZ3JS } = require('../../built-scripts/eval-z3');

async function runZ3File(inputFile) {
    // if the following fails then there is a bug in our program
    const originalInput = readJsonSync(inputFile).input;

    let Z3 = await init();

    try {
        let result = await evalZ3JS(Z3, originalInput);
        // require('fs').writeFileSync('/tmp/log.txt', String(originalInput), 'utf8');
        stdout.write(String(result));
    } catch (e) {
        stderr.write(String(e));
    } finally {
        Z3.em.PThread.terminateAllThreads();
    }
}

const inputFile = process.argv[2];

if (!inputFile) {
    throw new Error('Usage: node run-z3-js.js <input_file>');
}

(async () => await runZ3File(inputFile))();