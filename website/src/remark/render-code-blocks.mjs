
import visit from 'unist-util-visit';
import pkg from 'fs-extra';
const { readJson, writeJson, ensureDir } = pkg;
import { createHash } from 'crypto';
import { init } from 'z3-solver/build/wrapper.js';
import initZ3 from 'z3-solver/build/z3-built.js';
// reference: https://github.com/ViRb3/z3-wasm/blob/master/src/main.js

/**
 * Turns a "```z3" code block into a code block and an output area
 */

let _initializeZ3Promise
async function initializeZ3() {
    if (!_initializeZ3Promise)
        _initializeZ3Promise = async () => {
            const mod = await initZ3({
                locateFile: (f) => f,
                mainScriptUrlOrBlob: "z3-built.js",
            });
            const { Z3 } = await init(mod);
            return Z3
        }
    return _initializeZ3Promise;
}


async function getOutput(input) {
    // TODO: hash z3 version + input and use as file name
    // TODO: ${rise4fun engine version + z3 tool version + input}.json
    const hashObj = createHash('sha1');

    const hash = hashObj.update(input).digest('hex');
    const path = `./build/solutions/${hash}.json`;
    console.log(hash);
    try {
        const data = await readJson(path);
        if (data) {
            console.log(`cache hit ${hash}`)
            return data;
        }
    } catch (err) {
    }
    // code based on https://github.com/ViRb3/z3-wasm/blob/master/src/main.js

    const Z3 = await initializeZ3()

    // done on every snippet
    const cfg = Z3.mk_config();
    const ctx = Z3.mk_context(cfg);
    Z3.del_config(cfg);

    let output = "";
    for (const item of input.split("\n")) {
        // TODO: specify timeout with spawn?
        // TODO: file a bug, ask Nikolaj
        output = output.concat(await Z3.eval_smtlib2_string(ctx, item));
    }


    const result = {
        status: 0,
        output: output
    };


    // write to file
    await writeJson(path, result);


    // default output atm
    return result;
}


export default function plugin(options) {

    // console.log({ options });
    const transformer = async (ast) => {

        await ensureDir('./build/solutions');

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

            promises.push(async () => {
                const output = await getOutput(value);
                console.log(output);

                // console.log({ node, index, parent });

                const val = JSON.stringify({ code: value });
                parent.children.splice(
                    index,
                    1,
                    {
                        type: 'jsx',
                        // TODO: encode the source into jsx tree to avoid XSS?
                        value: `<Z3CodeBlock input={${JSON.stringify({ code: value })}} />`
                    }
                )
            })

        });
        await Promise.all(promises);
    };
    return transformer;
}