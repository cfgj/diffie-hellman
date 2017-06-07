var path = require('path');

module.exports = {
    entry: {
        dh: './src/index.ts',
        simpleExample: './examples/simple.ts'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        loaders: [{
            loader: 'ts-loader',
            exclude: /(node_modules)/
        }]
    }
};
