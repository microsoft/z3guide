const webpack = require('webpack');

function customWebpackConfig(context, options) {
    return {
        name: 'custom-webpack-config',
        configureWebpack(config, isServer, utils) {
            return {

                module: {

                    rules: [
                        {
                            test: /\.wasm$/,
                            type: `javascript/auto`,
                            loader: `ignore-loader`,
                        },
                        {
                            test: /\.tsx?$/,
                            use: [
                                {
                                    loader: 'ts-loader',
                                    options: {
                                        transpileOnly: true,
                                        compilerOptions: {
                                            noEmit: false,
                                        },
                                    },
                                },
                            ],
                            exclude: [
                                /node_modules/,
                            ]
                        },
                    ]
                },
                resolve: {
                    extensions: ['.tsx', '.ts', '.js'],
                    fallback: {
                        "path": false,
                        "fs": false,
                        "perf_hooks": false,
                    }
                },
            };
        },
    };
};

module.exports = customWebpackConfig;