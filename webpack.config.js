var path = require('path')
var webpack = require('webpack')


module.exports = {
  context: __dirname,
  entry: {
    app: [
      './src/main.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'static', 'build'),
    filename: '[name].js',
    publicPath: '/build/',
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue',
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loader: 'vue-html',
      }
    ],
  },
  resolve: {
    moduleDirectories: [
      'node_modules',
    ],
    extensions: ['', '.js', '.vue', '.jsx'],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  devtool: 'inline-source-map',
};
