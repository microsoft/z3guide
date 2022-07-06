// TODO: factor into an npm package / independent plugin

import visit from 'unist-util-visit';
import fs_extra_pkg from 'fs-extra';
const { readJsonSync, writeJsonSync, ensureDirSync } = fs_extra_pkg;
import { createHash } from 'crypto';
import z3pkg from 'z3-solver/package.json' assert { type: 'json' };
import { spawnSync } from 'child_process';

/**
 * Turns a "```z3" code block into a code block and an output area
 */
const VERSION = "1" // TODO move this into config


function checkZ3(input, output, hash, errRegex, skipErr) {
    if (skipErr) {
        return output;
    }

    const hasError = output.match(errRegex);
    if (hasError !== null) {
        throw new Error(
`\n******************************************
Z3 (version ${z3pkg.version}) Runtime Error

- Snippet: 
${input}

- Error Msg: 
${output}

- Hash: 
${hash}
******************************************\n`);
    }

    return "";
}

async function getOutput(input, lang, skipErr) {
    const timeout = 30000; // TODO move this into config
    const hashObj = createHash('sha1');

    // TODO: add rise4fun engine version to the hash

    const hash = hashObj
        .update(VERSION)
        .update(input)
        .update(lang)
        .update(z3pkg.version)
        .update(String(timeout))
        .digest('hex');
    const dir = `./solutions/${lang}/${z3pkg.version}/${hash}`;
    ensureDirSync(dir);
    const pathIn = `${dir}/input.json`;
    const pathOut = `${dir}/output.json`;
    // console.log(hash);

    const errRegex = new RegExp(/(\(error)|(unsupported)/g);
    const data = readJsonSync(pathOut, { throws: false }); // don't throw an error if file not exist
    if (data !== null) {
        console.log(`cache hit ${hash}`)
        const errorToReport = checkZ3(input, data.output, hash, errRegex, skipErr); // if this call fails an error will be thrown
        if (errorToReport !== "") { // we had erroneous code with ignore-error / no-build meta
            data.error = errorToReport;
            data.status = "z3-runtime-error";
            writeJsonSync(pathOut, data); // update old cache
        }
        return data;
    }


    let output = "";
    let error = "";
    let status = "success"; // default to be success

    const inputObj = { input: input };
    writeJsonSync(pathIn, inputObj);

    try {
        let result = spawnSync('node', ['./src/remark/run-z3.js', pathIn], { timeout: timeout });
        // TODO: runtime errors are also written to stdout, because z3 does not throw an error
        output = result.stdout.length > 0 ? result.stdout.toString() : "";
        // when running z3 does fail
        error = result.stderr.length > 0 ? result.stderr.toString() : "";
        // TODO: don't prepend everything with z3-, keep it generic
        status = error === "" ? "z3-ran" : "z3-failed";
    } catch (e) {
        error = `Z3 timed out after ${timeout}ms.`;
        output = "";

        // TODO: status code for z3 timeout
        status = "z3-timed-out";
    }

    console.log(`z3 finished: ${hash}, ${status}, ${output}, ${error}`);


    const errorToReport = checkZ3(input, output, hash, errRegex, skipErr); // if this call fails an error will be thrown

    if (errorToReport !== "") { // we had erroneous code with ignore-error / no-build meta
        error = errorToReport;
        status = "z3-runtime-error";
    }

    const result = {
        output: output,
        error: error,
        status: status,
        hash: hash
    }


    // write to file
    writeJsonSync(pathOut, result);

    return result;
}


export default function plugin(options) {

    // console.log({ options });
    const transformer = async (ast) => {

        ensureDirSync('./solutions');

        const promises = [];

        /** @type {import("unified").Transformer} */

        // console.log({ ast });
        visit(ast, 'root', (node) => {
            node.children.unshift(
                {
                    type: 'import',
                    value: "import Z3CodeBlock from '@site/src/components/TutorialComponents'"
                }
            )
        });

        visit(ast, 'code', (node, index, parent) => {
            const { value, lang, meta } = node;

            const skipRegex = new RegExp(/(no-build)|(ignore-errors)/g);
            const skipErr = meta && meta.match(skipRegex) !== null;

            if (lang !== 'z3') {
                return;
            }

            // TODO: update `getOutput` according to Kevin's example
            promises.push(async () => {
                // console.log(`num promises: ${promises.length}; `);
                const result = await getOutput(value, lang, skipErr);

                // console.log({ node, index, parent });

                const val = JSON.stringify({ code: value, result: result });
                parent.children.splice(
                    index,
                    1,
                    {
                        type: 'jsx',
                        // TODO: encode the source into jsx tree to avoid XSS?
                        // TODO: create a generic <CodeBlock and pass lang={lang} />
                        value: `<Z3CodeBlock input={${val}} />`
                    }
                )
            })

        });

        for (const p of promises) {
            // need to run sync according to Kevin
            await p();
            // console.log(`num promises: ${promises.length}`);
        }
    };
    return transformer;
}