module.exports = {
    entry: './core/main.js',
    output: {
        filename: './deprecate-ie.js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: [
                    [
                        '@babel/preset-env', {
                            targets: {
                                node: 'current'
                            },
                            modules: 'false'
                        }
                    ],
                ],
            },
            exclude: ['/node_modules'],
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        }],
    },
}