const fs = require('fs-extra');

async function addCoiServiceWorker(context, options) {
    return {
        name: 'add-coi-serviceworker',
        async contentLoaded({ content, actions }) {
            fs.ensureDir('./build');
            const success = await fs.copy('./node_modules/coi-serviceworker/coi-serviceworker.js',
                './build/coi-serviceworker.js',
                { overwrite: false, errorOnExist: true },
                err => {
                    if (err) throw err;
                    console.log('success!');
                });
            console.error(success);
        },
        // configureWebPack(config, isServer, utils) {
        //     return {
        //         module: {
        //             plugins: [
        //                 new CopyPlugin({
        //                     patterns:[
        //                         {
        //                             from: 'coi-serviceworker/coi-serviceworker.js',
        //                             to: 'dist/',
        //                             context: 'node_modules',
        //                         }
        //                     ]
        //                 })
        //             ]
        //         }
        //     }
        // },
    };
}

module.exports = addCoiServiceWorker;

