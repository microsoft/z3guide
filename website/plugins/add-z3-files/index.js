const fs = require('fs-extra');

async function addZ3Files(context, options) {
    return {
        name: 'add-z3-files',
        async contentLoaded({ content, actions }) {

            const filesToCopy = [
                {
                    input: './node_modules/coi-serviceworker/coi-serviceworker.js',
                    output: './static/coi-serviceworker.js',
                    required: true
                },
                {
                    input: './node_modules/z3-solver/build/z3-built.js',
                    output: './static/z3-built.js',
                    required: true
                },
                {
                    input: './node_modules/z3-solver/build/z3-built.wasm',
                    output: './static/z3-built.wasm',
                    required: true
                },
                {
                    input: './node_modules/z3-solver/build/z3-built.worker.js',
                    output: './static/z3-built.worker.js',
                    required: false,
                    fallback: './node_modules/z3-solver/build/z3-built.js'
                }
            ];

            fs.ensureDir('./static');

            for (const file of filesToCopy) {
                let sourceFile = file.input;
                
                // Check if the file exists, if not and we have a fallback, use it
                if (!fs.existsSync(file.input)) {
                    if (file.fallback && fs.existsSync(file.fallback)) {
                        sourceFile = file.fallback;
                        console.log(`${file.input} not found, using fallback ${file.fallback}`);
                    } else if (file.required) {
                        throw new Error(`Required file ${file.input} not found and no fallback available`);
                    } else {
                        console.log(`Optional file ${file.input} not found, skipping`);
                        continue;
                    }
                }

                await fs.copy(sourceFile,
                    file.output,
                    { overwrite: true },
                    err => {
                        if (err) throw err;
                        console.log(`${sourceFile} copied to ${file.output} success!`);
                    });
            }
        },
    };
}

module.exports = addZ3Files;

