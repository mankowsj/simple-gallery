var Utils = require('./utils'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

module.exports = [
  new HtmlWebpackPlugin({
    template: Utils.fromRoot('config/htmlTemplates/index.ejs'),
    inject: true,
    meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'}
  }),
  new ScriptExtHtmlWebpackPlugin({
    defaultAttribute: 'defer'
  }),
  new MiniCssExtractPlugin({
    filename: '[name].st.css',
    chunkFilename: '[name].[id].css',
    allChunks: true
  })
];
