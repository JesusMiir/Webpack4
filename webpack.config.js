const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/app.js'
    },    
    output: {
        filename: 'bundle.js',
        path: __dirname + '/build'
    },
    
    devServer: {
        port: 5000
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader', options: { attributes: { id: 'id' } } },
                    { loader: 'css-loader' }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
           template: './src/index.html' 
        })
    ]
}