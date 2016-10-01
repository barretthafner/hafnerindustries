var path = require('path')
var webpack = require('webpack');
var packageData = require('./package.json');

module.exports = {
  entry: [path.resolve(__dirname, 'src/client/index.jsx')],
  output: {
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
