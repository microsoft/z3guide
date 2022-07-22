declare global {
    interface Window { z3Promise: any } // use any to escape typechecking
}

export default async function runZ3JSWeb(input: string): Promise<string> {

    // init z3
    const z3 = require('z3-solver');
    window.z3Promise = z3.init();

    // done on every snippet
    let { Context } = await window.z3Promise;
    let Z3 = Context('main');

    // add `return ` to the beginning of the last line of the input
    // because we are wrapping the input inside an async function
    const lines = input.trim().split('\n'); // remove extra whitespace first
    const lastLine = `return ${lines[lines.length - 1]}`;
    const withReturn = `${lines.slice(0, lines.length - 1).join('\n')}\n${lastLine}`;


    let output, error = undefined;

    try {
        const func = eval(`(async () => { ${withReturn} })`);
        output = await func();
    } catch (e) {
        // error with running z3
        error = e.message;
    } finally {
        return JSON.stringify({ output: output, error: error });
    }
}