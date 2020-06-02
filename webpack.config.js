const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src', 'scripts', 'main.ts'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: 'ts-loader',
            },
            {
                test: /\.scss$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "bundle.css"
                        }
                    },
                    "sass-loader"
                ],
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    devtool: 'inline-source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        }),
        new OptimizeCSSAssetsPlugin({}),
    ],
};
