// TODO: factor into an npm package / independent plugin

import visit from 'unist-util-visit';
import fs_extra_pkg from 'fs-extra';
const { readJsonSync, writeJsonSync, ensureDirSync } = fs_extra_pkg;
import { createHash } from 'crypto';
import z3pkg from 'z3-solver/package.json' assert { type: 'json' };
import { execSync } from 'child_process';

/**
 * Turns a "```z3" code block into a code block and an output area
 */


async function getOutput(input) {
    const hashObj = createHash('sha1');

    const hash = hashObj.update(input + z3pkg.version).digest('hex');
    // ${rise4fun engine version + z3 tool version + input}.json
    // TODO: add rise4fun engine version to the hash
    const path = `./build/solutions/${hash}.json`;
    // console.log(hash);
    try {
        const data = readJsonSync(path);
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
    let status = 0; // default to be success

    const inputObj = JSON.stringify({ arg: input });

    const command = `node ./src/remark/run-z3.js ${inputObj}`;

    try {
        output = execSync(command, { timeout: 5000 }).toString();
    } catch (e) {
        error = e.message;
        output = "";

        // TODO: status code for z3 timeout
        status = 1;
    }

    console.log(`z3 finished: ${hash}, ${status}, ${output}, ${error}`);

    const result = {
        output: output,
        error: error,
        status: status,
        hash: hash
    }


    // write to file
    writeJsonSync(path, result);

    return result;
}


export default function plugin(options) {

    // console.log({ options });
    const transformer = async (ast) => {

        ensureDirSync('./build/solutions');

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
                const result = await getOutput(value);

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