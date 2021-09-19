const webpack = require('webpack');
const path = require('path');

const config = {
    mode: 'development',
    entry: './assets/js/index.js',
    output: {
        path: path.resolve(__dirname, 'web'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: "sass-loader"},
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'web'),
        },
        compress: true,
        port: 8000,
    },
};

module.exports = config;