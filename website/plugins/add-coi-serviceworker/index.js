const CopyPlugin = require('copy-webpack-plugin');

async function addCoiServiceWorker(context, options) {
    return {
        name: 'add-coi-serviceworker',
        configureWebPack(config, isServer, utils) {
            return {
                module: {
                    plugins: [
                        new CopyPlugin({
                            patterns:[
                                {
                                    from: './node_modules/coi-serviceworker/coi-serviceworker.js',
                                    to: '/build/coi-serviceworker.js',
                                }
                            ]
                        })
                    ]
                }
            }
        },
    };
}

module.exports = addCoiServiceWorker;

