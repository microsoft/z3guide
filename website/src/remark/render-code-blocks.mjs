
import visit from 'unist-util-visit';
import fs_extra_pkg from 'fs-extra';
const { readJsonSync, writeJsonSync, ensureDirSync } = fs_extra_pkg;
import { createHash } from 'crypto';
import { init } from 'z3-solver';
import z3pkg from 'z3-solver/package.json' assert { type: 'json' };

/**
 * Turns a "```z3" code block into a code block and an output area
 */

let _initializeZ3Promise;
async function initializeZ3() {
    if (!_initializeZ3Promise)
        _initializeZ3Promise = await init();
    return _initializeZ3Promise;
}


async function getOutput(input) {
    const hashObj = createHash('sha1');

    const hash = hashObj.update(input + z3pkg.version).digest('hex');
    // ${rise4fun engine version + z3 tool version + input}.json
    // TODO: add rise4fun engine version to the hash
    const path = `./build/solutions/${hash}.json`;
    console.log(hash);
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

    const { em, Z3 } = await initializeZ3();

    // done on every snippet
    const cfg = Z3.mk_config();
    const ctx = Z3.mk_context(cfg);
    Z3.del_config(cfg);

    let output = "";
    let error = "";
    let status = 0; // default to be success

    try {
        output = await Z3.eval_smtlib2_string(ctx, input);
        setTimeout(() => {
            // TODO this error won't be caught by the `catch` block
            throw new Error('z3 times out after 500ms');
        }, 500);
    } catch (e) {
        // TODO still get errors of "you cannot run the eval async..."
        error = e.message;
        output = "";

        // when z3 times out
        if (e.message === 'z3 times out after 500ms') {
            console.log(`${hash}: ${error}`);
            status = 2;
        }
        // when the wasm-build fails
        else status = 1;
    } finally {
        try {
            Z3.del_context(ctx);
            em.PThread.terminateAllThreads();
        } catch (e) {
            // supposedly it should not happen, b/c if it fails then there is an error with our code 
            // however, we might terminate threads when something times out, in which an abort is expected
            // TODO: way around this?
            console.log(`z3 aborted`);
        }

    }

    console.log(`z3 finished: ${hash}, ${status}`);

    const result = {
        status: status,
        hash: hash,
        output: output,
        error: error
    };



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
            console.log(`num promises: ${promises.length}`);
        }
    };
    return transformer;
}