import Path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

export default {
    devtool:'source-map',
    entry: {
        index: './index.js',
    },
    output: {
        path: Path.resolve( './', 'dist'),
        filename: 'index.min.js',
    },
    module: {
        rules: [
            {   test: /\.css$/i,
                use: ['style-loader','css-loader']
            },
            {   test:/\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: { outputPath: 'images' }
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:"HTML5 Sample App",
            template:"./index.html"
        }),
    ]
}