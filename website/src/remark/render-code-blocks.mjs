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


async function getOutput(input, lang) {
    const timeout = 30000;
    const hashObj = createHash('sha1');

    // TODO: add rise4fun engine version to the hash

    const hash = hashObj.update(input).update(z3pkg.version).update(String(timeout)).digest('hex');
    const dir = `./solutions/${lang}/${z3pkg.version}/${hash}`;
    ensureDirSync(dir);
    const pathIn = `${dir}/input.json`;
    const pathOut = `${dir}/output.json`;
    // console.log(hash);
    try {
        const data = readJsonSync(pathOut);
        if (data) {
            console.log(`cache hit ${hash}`)
            return data;
        }
    } catch (err) {
        // proceed with running z3 and do nothing
        // TODO: factor this out
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
            const { value, lang } = node;

            if (lang !== 'z3') {
                return;
            }

            // TODO: update `getOutput` according to Kevin's example
            promises.push(async () => {
                // console.log(`num promises: ${promises.length}; `);
                const result = await getOutput(value, lang);

                // console.log({ node, index, parent });

                const val = JSON.stringify({ code: value, result: result });
                parent.children.splice(
                    index,
                    1,
                    {
                        type: 'jsx',
                        // TODO: encode the source into jsx tree to avoid XSS?
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