module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'dist/output.js'
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
