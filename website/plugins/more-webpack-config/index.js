function customWebpackConfig(context, options) {
    return {
        name: 'custom-webpack-config',
        configureWebpack(config, isServer, utils) {
            return {
                // experiments: {
                //     asyncWebAssembly: true,
                //     syncWebAssembly: true,
                // },
                module: {
                    rules: [
                        {
                            test: /z3-built\.js$/,
                            loader: `exports-loader`,
                            options: {
                                type: `module`,
                                exports: `initZ3`,
                            },
                        },
                        // wasm files should not be processed but just be emitted and we want
                        // to have their public URL.
                        {
                            test: /z3-built\.wasm$/,
                            type: `javascript/auto`,
                            loader: `file-loader`,
                            options: {
                                publicPath: `static/`,
                            },
                        },
                    ]
                },
                resolve: {
                    fallback: {
                        "path": false,
                        // "path": require.resolve('path-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
                        "fs": false,
                        "perf_hooks": false,
                    }
                },
            };
        },
    };
};

module.exports = customWebpackConfig;