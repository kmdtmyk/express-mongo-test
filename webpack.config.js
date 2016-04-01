var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: {
        main: [
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
            './src/main.jsx',
        ],
    },
    output: {
        path: path.resolve(__dirname, 'public', 'build'),
        filename: '[name].js',
        publicPath: '/build/',
    },
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
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devtool: 'inline-source-map',
};
