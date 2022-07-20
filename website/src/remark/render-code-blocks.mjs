// TODO: factor into an npm package / independent plugin

import visit from 'unist-util-visit';
import fs_extra_pkg from 'fs-extra';
import { spawnSync } from 'child_process';
const { readJsonSync, writeJsonSync, ensureDirSync } = fs_extra_pkg;
import { createHash } from 'crypto';

import getLangConfig from '../../language.config.js';
const languageConfig = await getLangConfig();


/**
 * Turns a "```z3" code block into a code block and an output area
 */
const VERSION = "1" // TODO move this into config
const SOLUTIONS_DIR = languageConfig.solutionsDir;


function checkRuntimeError(langVersion, input, output, hash, errRegex, skipErr) {
    if (skipErr) {
        return output;
    }

    const hasError = output.match(errRegex);
    if (hasError !== null) {
        throw new Error(
            `\n******************************************
Z3 (version ${langVersion}) Runtime Error

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

async function getOutput(config, input, lang, skipErr) {
    // const timeout = 30000; // TODO move this into config

    const {timeout, langVersion, statusCodes} = config;
    const hashObj = createHash('sha1');

    // TODO: add rise4fun engine version to the hash

    const hash = hashObj
        .update(VERSION)
        .update(input)
        .update(lang)
        .update(langVersion)
        .update(String(timeout))
        .digest('hex');
    const dir = `${SOLUTIONS_DIR}/${lang}/${langVersion}/${hash}`;
    ensureDirSync(dir);
    const pathIn = `${dir}/input.json`;
    const pathOut = `${dir}/output.json`;
    // console.log(hash);

    const errRegex = new RegExp(/(\(error)|(unsupported)/g);
    const data = readJsonSync(pathOut, { throws: false }); // don't throw an error if file not exist
    if (data !== null) {
        console.log(`cache hit ${hash}`)
        const errorToReport = checkRuntimeError(langVersion, input, data.output, hash, errRegex, skipErr); // if this call fails an error will be thrown
        if (errorToReport !== "") { // we had erroneous code with ignore-error / no-build meta
            data.error = errorToReport;
            data.status = statusCodes.runtimeError;
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

        status = error === "" ? statusCodes.success : statusCodes.runError;
    } catch (e) {
        error = `Z3 timed out after ${timeout}ms.`;
        output = "";

        status = statusCodes.timeout;
    }

    console.log(`z3 finished: ${hash}, ${status}, ${output}, ${error}`);


    const errorToReport = checkRuntimeError(langVersion, input, output, hash, errRegex, skipErr); // if this call fails an error will be thrown

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


export default function plugin() {

    // console.log({ options });
    const transformer = async (ast) => {

        ensureDirSync(SOLUTIONS_DIR);

        const promises = [];

        /** @type {import("unified").Transformer} */
        visit(ast, 'root', (node) => {

            node.children.unshift(
                {
                    type: 'import',
                    // TODO: rename `Z3CodeBlock`
                    value: "import Z3CodeBlock from '@site/src/components/TutorialComponents'"
                }
            )
        });

        visit(ast, 'code', (node, index, parent) => {
            const { value, lang, meta } = node;

            const skipRegex = new RegExp(/(no-build)|(ignore-errors)/g);
            const skipErr = meta && meta.match(skipRegex) !== null;

            for (const langConfig of languageConfig.languages) {

                const label = langConfig.label;
                const highlight = langConfig.highlight;

                if (lang !== label) {
                    continue; // onto the next lang config available until we are out
                }

                if (!langConfig.buildConfig) {
                    // there is no runtime configured,
                    // so just add the syntax highlighting

                    parent.children.splice(
                        index,
                        1,
                        {
                            type: 'code',
                            lang: highlight,
                            value: value,
                        }
                    );
                    // console.log(`no build config for ${lang}`);
                    // console.log(`${highlight} syntax highlighting added for input: ${value}`);
                    continue;
                }

                promises.push(async () => {
                    // console.log(`num promises: ${promises.length}; `);
                    const config = langConfig.buildConfig;
                    const result = await getOutput(config, value, lang, skipErr);

                    // console.log({ node, index, parent });

                    const val = JSON.stringify({ code: value, result: result });
                    parent.children.splice(
                        index,
                        1,
                        {
                            type: 'jsx',
                            // TODO: encode the source into jsx tree to avoid XSS?
                            // TODO: create a generic <CodeBlock and pass lang={lang} />
                            // TODO: pass syntax highlighting to CodeBlock
                            value: `<Z3CodeBlock input={${val}} />`
                        }
                    )
                });
            }

        });

        for (const p of promises) {
            // need to run sync according to Kevin
            await p();
            // console.log(`num promises: ${promises.length}`);

        }
    };
    return transformer;
}