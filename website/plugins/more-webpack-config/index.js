function customWebpackConfig(context, options) {
    return {
        name: 'custom-webpack-config',
        configureWebpack(config, isServer, utils) {
            return {
                module: {
                    rules: [
                        // ideally we should not get webpack to handle wasm
                        // but without the following rule we are unable to build
                        {
                            test: /z3-built\.wasm$/,
                            type: `javascript/auto`,
                            loader: `file-loader`,
                            options: {
                                publicPath: `static/`,
                            },
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