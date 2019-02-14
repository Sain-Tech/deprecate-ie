const path = require('path');
module.exports = {
    entry: './core/main.js',
    output: {
        filename: './deprecate-ie.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.join(__dirname),
            exclude: /(node_modules)|(dist)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        }],
    },
}