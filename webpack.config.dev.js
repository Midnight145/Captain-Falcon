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
    plugins: [new HtmlWebpackPlugin({
        title: 'Captain Falcon',
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