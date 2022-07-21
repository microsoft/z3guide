//@ts-check

async function createConfig() {
    const config = {
        languages: [ // languages where you want to enable interactivity in editable code blocks 
            {
                name: 'Z3', // your language name
                label: 'z3', // label for the language in markdown code blocks
                highlight: 'lisp', // syntax highlighting provided by prism for the language
                buildConfig: {
                    version: '1',
                    timeout: 30000, // timeout for execution of each code snippet in milliseconds during build
                    npmPackage: 'z3-solver', // npm package name for the language runtime, if any
                    processToExecute: './src/remark/run-z3-smtlib.js',
                    statusCodes: {
                        success: 'z3-ran',
                        timeout: 'z3-timed-out',
                        runError: 'z3-failed',
                        runtimeError: 'z3-runtime-error',
                    },
                },
            },
            {
                name: 'Z3 JavaScript Bindings',
                label: 'z3-js',
                highlight: 'js',
            },
        ],
        solutionsDir: './solutions',
    }

    for (const langConfig of config.languages) {
        if (!langConfig.buildConfig) {
            // console.log(`no config for ${langConfig.label}`);
            continue;
        }
        const npmPackage = langConfig.buildConfig.npmPackage;
        if (npmPackage) {
            const pkgJson = `${npmPackage}/package.json`;
            // @ts-ignore
            const langVersion = (await import(pkgJson, { assert: { type: 'json' } })).default.version;
            langConfig.buildConfig.langVersion = langVersion;
        }
    }

    return config;
}

module.exports = createConfig;