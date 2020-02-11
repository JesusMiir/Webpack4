const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + 'build',
        filename: 'bundle.js'
    },
    devSever: {
        port: 5000
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            }
        ]
    },
    plugin: [
        new HtmlWebpackPlugin({
           template: './src.index.html' 
        })
    ]
}