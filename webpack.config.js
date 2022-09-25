const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtract = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/',
    },

    mode: 'development',

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node__modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),

        new MiniCssExtract({
            filename: '[name].css'
        }),
    ],
    devServer: {


        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 3005,
        historyApiFallback: true,
    }
}