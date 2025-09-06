const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const CopyPlugin = require('copy-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    performance: {
        hints: 'warning',
        maxAssetSize: 200000, // 200 KB
        maxEntrypointSize: 400000, // 400 KB
    },
    output: {
        filename: 'assets/js/[name].[contenthash].bundle.js',
    },
    optimization: {
        minimizer: [
            `...`, // Keep the default minimizers (like TerserPlugin)
            new CssMinimizerPlugin(),
        ],
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].[contenthash].css',
        }),
        new CopyPlugin({
            patterns: [
                {from: 'assets/img', to: 'assets/img'},
                {from: 'robots.txt', to: 'robots.txt'},
                {from: 'site.webmanifest', to: 'site.webmanifest'},
                {from: 'CNAME.txt', to: 'CNAME.txt'},
            ],
        }),
        new ImageMinimizerPlugin({ // may remove
            minimizer: {
                implementation: ImageMinimizerPlugin.imageminGenerate,
                options: {
                    plugins: [
                        ['gifsicle', {interlaced: true}],
                        ['jpegtran', {progressive: true}],
                        ['optipng', {optimizationLevel: 5}],
                        ['svgo', {
                            plugins: [
                                {
                                    name: 'preset-default',
                                    params: {
                                        overrides: {
                                            removeViewBox: false,
                                        },
                                    },
                                },
                                {
                                    name: 'addAttributesToSVGElement',
                                    params: {
                                        attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
                                    },
                                },
                            ],
                        }],
                    ],
                }
            },
        }),
    ],
});
