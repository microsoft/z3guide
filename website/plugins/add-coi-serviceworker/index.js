const fs = require('fs-extra');

async function addCoiServiceWorker(context, options) {
    return {
        name: 'add-coi-serviceworker',
        async contentLoaded({ content, actions }) {
            fs.ensureDir('./static');
            await fs.copy('./node_modules/coi-serviceworker/coi-serviceworker.js',
                './static/coi-serviceworker.js',
                { overwrite: false, errorOnExist: true },
                err => {
                    if (err) throw err;
                    console.log('copy success!');
                });
        },
    };
}

module.exports = addCoiServiceWorker;

