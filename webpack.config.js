var path = require('path'),
    resolve = require('./webpack.resolve').resolve,
    rules = require('./config/webpack/rules'),
    plugins = require('./config/webpack/plugins'),
    devServer = require('./config/webpack/dev-server'),
    entry = require('./config/webpack/entries');

module.exports = {
    devtool: false,
    target: 'web',
    entry,
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        pathinfo: true,
        path: path.join(__dirname, './build')
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
    devServer,
    resolve,
    plugins,
    module: {
        rules
    }
};