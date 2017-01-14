const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const lib = [
    'react',
    'react-dom',
    'react-redux',
    'react-router',
    'react-router-redux',
    'redux'
];

module.exports = {
    entry: {
        client: './app/index.jsx',
        lib
    },
    output: {
        filename: '[name].min.js?[chunkhash]',
        path: './prod/js',
        publicPath: '/js/'
    },
    devtool: 'none',
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
            favicon: 'app/images/favicon.png'
        }),
        new CleanWebpackPlugin(
            [ 'prod' ],
            {
                verbose: false
            }
        ),
        new webpack.EnvironmentPlugin(['NODE_ENV']),
        new webpack.optimize.CommonsChunkPlugin({
            name: [ 'lib', 'manifest' ]
        }),
        new webpack.optimize.CommonsChunkPlugin({
            children: true,
            async: true
        })
    ]
};