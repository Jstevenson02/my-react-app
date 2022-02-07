const path = require("path");

module.exports = { 
    mode:"development",
    entry: path.resolve(__dirname, 'src', 'app'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        modules: ['.js', '.jsx']
    },
    devServer: {
        inline: false,
        historyApiFallback: true
    },
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader'
        }]
    }
}