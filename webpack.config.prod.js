const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'client.min.js',
        path: './prod/js',
        publicPath: '/js/'
    },
    devtool: 'none',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|dev\/|prod\/)/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'app/template.html',
        filename: '../index.html',
        favicon: 'app/images/favicon.png',
        hash: true
    }),
        new CleanWebpackPlugin(
            [ 'prod' ],
            {
                verbose: false
            }
        )]
};