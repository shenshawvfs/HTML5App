const Path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool:'source-map',
    entry: {
        index: './index.js',
    },
    output: {
        path: Path.resolve( __dirname, 'docs'),
        filename: 'index.min.js',
    },
    plugins: [
         new HtmlWebpackPlugin({
             title:"HTML5 Sample App"
         }),
    ]
}