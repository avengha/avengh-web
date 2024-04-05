const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(), // Minify JS
      new CssMinimizerPlugin(), // Minify CSS
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      cache: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'template.html',
      template: './template.html',
      cache: true,
    }),
    new HtmlWebpackPlugin({
      filename: '404.html',
      template: './404.html',
      cache: true,
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash].css',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'assets/img', to: 'assets/img' },
        { from: 'assets/css', to: 'assets/css' },
        { from: 'assets/js', to: 'assets/js' },
        { from: 'icon.svg', to: 'icon.svg' },
        { from: 'favicon.ico', to: 'favicon.ico' },
        { from: 'robots.txt', to: 'robots.txt' },
        { from: 'icon.png', to: 'icon.png' },
        { from: 'site.webmanifest', to: 'site.webmanifest' },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
});
