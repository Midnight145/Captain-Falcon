const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
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
        filename: 'js/[name].min.js?[chunkhash]',
        path: './prod/',
        publicPath: '/'
    },
    devtool: 'none',
    resolve: {
        extensions: ['.js', '.jsx', 'css', 'scss', '.png'],
        modules: [ path.resolve(__dirname, 'app'), 'node_modules' ]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|dev|prod)/,
                loader: 'babel-loader'
            },
            {
                test: /\.png$/,
                exclude: /(node_modules|dev|prod)/,
                loader: 'file-loader?name=images/[name].[ext]?[md5:hash:hex:20]'
            },
            {
                test: /\.s?css/,
                exclude: /(node_modules|dev|prod)/,
                loader: ExtractTextWebpackPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: 'css-loader?module!sass-loader'
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/template.html',
            filename: 'index.html'
        }),
        new CleanWebpackPlugin(
            [ 'prod' ],
            {
                verbose: false
            }
        ),
        new webpack.EnvironmentPlugin(['NODE_ENV']),
        new FaviconsWebpackPlugin({
            logo: './app/images/favicon1.png',
            prefix: 'images/icons-[hash]/'
        }),
        new ExtractTextWebpackPlugin({
            filename: 'css/[name].min.css?[contenthash]',
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: [ 'lib', 'manifest' ]
        }),
        new webpack.optimize.CommonsChunkPlugin({
            children: true,
            async: true
        }),
        new CompressionWebpackPlugin({
            asset: '[path].gz?[query]'
        })
    ]
};