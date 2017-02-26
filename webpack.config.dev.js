const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const lib = [
    'react',
    'react-bootstrap',
    'react-dom',
    'react-redux',
    'react-router',
    'react-router-redux',
    'redux'
];

const exclude = /(node_modules|libraries|dev|prod)/;

module.exports = {
    entry: {
        client: './app/index.jsx',
        lib
    },
    output: {
        filename: 'js/[name].js?[chunkhash]',
        path: './dev/',
        publicPath: '/'
    },
    devtool: 'eval-source-map',
    resolve: {
        extensions: ['.js', '.jsx', 'css', 'scss', '.png'],
        modules: [ path.resolve(__dirname, 'app'), path.resolve(__dirname, 'libraries'), 'node_modules' ]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude,
                loader: 'babel-loader'
            },
            {
                test: /\.png$/,
                exclude,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]?[md5:hash:hex:20]',
                }
            },
            {
                test: /\.s?css/,
                exclude,
                loader: 'style-loader!css-loader?module!sass-loader'
            },
            {
                test: /\.(ttf|svg|eot|woff|woff2)$/,
                exclude,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]?[md5:hash:hex:20]',
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/template.html',
            filename: 'index.html',
            favicon: 'app/images/favicon2.png'
        }),
        new CleanWebpackPlugin(
            [ 'dev' ],
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