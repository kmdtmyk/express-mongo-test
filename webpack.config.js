module.exports = {
    context: __dirname,
    entry: './src/main.jsx',
    output: {
        filename: './bundle.js',
        path: __dirname + '/public/build',
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [{
            test: /.jsx$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['react', 'es2015'],
            }
        }],
    },
    resolve: {
        moduleDirectories: [
            'node_modules',
        ],
        extensions: ['', '.js', '.jsx'],
    },
};
