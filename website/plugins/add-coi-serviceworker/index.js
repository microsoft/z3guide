async function addCoiServiceWorker(context, options) {
    return {
        name: 'add-coi-serviceworker',
        configureWebPack(config, isServer, utils) {
            return {
                module: {
                    entry: './node_modules/coi-serviceworker/coi-serviceworker.js',

                    output: {
                        filename: 'coi-serviceworker.js',
                        path: 'build',
                        libraryTarget: 'umd',
                    }
                }
            }
        },
    };
}

module.exports = addCoiServiceWorker;

