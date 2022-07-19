module.exports = {
    languages: [ // languages where you want to enable interactivity in editable code blocks 
        {
            name: 'Z3', // your language name
            label: 'z3', // label for the language in markdown code blocks
            prism: 'lisp', // syntax highlighting provided by prism for the language
            buildConfig: {
                version: '1',
                timeout: 30000, // timeout for execution of each code snippet in milliseconds during build
                npmPackage: 'z3-solver', // npm package name for the language runtime, if any
                processToExecute: './src/remark/run-z3.js',
                statusCodes: {
                    success: 'z3-ran',
                    timeout: 'z3-timed-out',
                    runError: 'z3-failed',
                    runtimeError: 'z3-runtime-error',
                },
                solutionsDir: './solutions',
            }
        },
        {
            name: 'Z3 JavaScript Binding',
            label: 'z3-js',
            prism: 'javascript',
        },
    ],
}