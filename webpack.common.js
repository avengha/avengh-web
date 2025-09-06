const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './assets/js/main-scripts.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: 'assets/js/[name].bundle.js',
    assetModuleFilename: 'assets/img/[name].[hash][ext]',
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      chunks: ['app'],
    }),
    new HtmlWebpackPlugin({
      template: './terms.html',
      filename: 'terms.html',
      chunks: ['app'],
    }),
    new HtmlWebpackPlugin({
      template: './privacy.html',
      filename: 'privacy.html',
      chunks: ['app'],
    }),
    new HtmlWebpackPlugin({
      template: './404.html',
      filename: '404.html',
      chunks: ['app'],
    }),
  ],
};
