const path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './frontend/realty_mogul.jsx',
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};
