const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    liveReload: true,
    hot: true,
    open: true,
    static: ['./'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new HtmlWebpackPlugin({
      template: './terms.html',
      filename: 'terms.html',
    }),
    new HtmlWebpackPlugin({
      template: './privacy.html',
      filename: 'privacy.html',
    }),
    new HtmlWebpackPlugin({
      template: './404.html',
      filename: '404.html',
    }),
  ],
});
