const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './app/index.jsx',
    output: {
        filename: 'client.js',
        path: './dev/js',
        publicPath: '/js/'
    },
    devtool: 'eval-source-map',
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [ path.resolve(__dirname, "app"), "node_modules" ]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|dev\/|prod\/)/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/template.html',
            filename: '../index.html',
            favicon: 'app/images/favicon.png',
            hash: true
        }),
        new CleanWebpackPlugin(
            [ 'dev' ],
            {
                verbose: false
            }
        ),
        new webpack.EnvironmentPlugin(['NODE_ENV']),
        new webpack.optimize.CommonsChunkPlugin({
            children: true,
            async: true,
        })
    ]
};