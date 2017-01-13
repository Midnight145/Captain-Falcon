const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'client.js',
        path: './dev/js',
        publicPath: '/js/'
    },
    devtool: 'eval-source-map',
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
            [ 'dev' ],
            {
                verbose: false
            }
        )]
};