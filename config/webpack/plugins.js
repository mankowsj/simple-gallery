var Utils = require('./utils'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
    new HtmlWebpackPlugin({
        template: Utils.fromRoot('config/htmlTemplates/index.ejs')
    }),
    new MiniCssExtractPlugin({
        filename: '[name].st.css',
        chunkFilename: '[name].[id].css',
        allChunks: true,
    })
];
