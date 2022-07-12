function customWebpackConfig(context, options) {
    return {
        name: 'custom-webpack-config',
        configureWebpack(config, isServer, utils) {
            return {
                experiments: {
                    asyncWebAssembly: true,
                    syncWebAssembly: true,
                },
                resolve: {
                    fallback: {
                        "path-browserify": require.resolve('path-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
                    }
                },
            };
        },
    };
};

module.exports = customWebpackConfig;