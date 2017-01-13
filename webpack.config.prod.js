const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'client.min.js',
        path: './prod/js',
        publicPath: '/js/'
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Captain Falcon',
        filename: '../index.html',
        favicon: 'app/images/favicon.png'
    }),
        new CleanWebpackPlugin(
            [ 'prod' ],
            {
                verbose: false
            }
        )]
};