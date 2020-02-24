var Utils = require('./utils'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin'),
  CopyPlugin = require('copy-webpack-plugin');

module.exports = [
  new HtmlWebpackPlugin({
    template: Utils.fromRoot('config/htmlTemplates/index.ejs'),
    inject: true,
    meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'}
  }),
  new ScriptExtHtmlWebpackPlugin({
    defaultAttribute: 'defer'
  }),
  new CopyPlugin([
    {
      from: Utils.fromRoot('src/assets/**/*'),
      to: Utils.fromRoot('build'),
      test: /\.(svg|txt|woff|woff2|jpg)$/
    }
  ]),
  new MiniCssExtractPlugin({
    filename: '[name].st.css',
    chunkFilename: '[name].[id].css',
    allChunks: true
  })
];
