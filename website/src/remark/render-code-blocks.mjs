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
    const timeOut = 30000;
    const hashObj = createHash('sha1');

    const hash = hashObj.update(input).update(z3pkg.version).update(timeOut);
    
    hash.digest('hex');

    ensureDirSync(`./build/solutions/${hash}`);
    // ${rise4fun engine version + z3 tool version + input}.json
    // TODO: add rise4fun engine version to the hash
    const pathIn = `./build/solutions/${hash}/input.json`;
    const pathOut = `./build/solutions/${hash}/output.json`;
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

    const command = `node ./src/remark/run-z3.js ${pathIn}`;

    try {
        output = execSync(command, { timeout: 30000 });
        // output = result.stdout ?? "";
        // error = result.stderr ?? "";
        // status = result.status;
    } catch (e) {
        error = e.message;
        output = "";

        // TODO: status code for z3 timeout
        status = "error";
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