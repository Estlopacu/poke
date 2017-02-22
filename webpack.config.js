var path = require('path');

module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    devServer: {
        inline: true,
        port: 3333
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },
    resolve: {
        extensions: ['', '.js', '.es6']
    },
};
