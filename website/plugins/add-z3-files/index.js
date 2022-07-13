const fs = require('fs-extra');

async function addZ3Files(context, options) {
    return {
        name: 'add-z3-files',
        async contentLoaded({ content, actions }) {

            const inFiles = [
                './node_modules/coi-serviceworker/coi-serviceworker.js',
                './node_modules/z3-solver/build/z3-built.js',
                './node_modules/z3-solver/build/z3-built.wasm',
                './node_modules/z3-solver/build/z3-built.worker.js',

            ];

            const outFiles = [
                './static/coi-serviceworker.js',
                './static/z3-built.js',
                './static/z3-built.wasm',
                './static/z3-built.worker.js',
            ];

            for (let i = 0; i < inFiles.length; i++) {
                const inFile = inFiles[i];
                const outFile = outFiles[i];
                fs.ensureDir('./static');
                await fs.copy(inFile,
                    outFile,
                    { overwrite: true },
                    err => {
                        if (err) throw err;
                        console.log(`${inFile} copied to ${outFile} success!`);
                    });
            }
        },
    };
}

module.exports = addZ3Files;

