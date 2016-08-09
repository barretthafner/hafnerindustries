var path = require('path')
var webpack = require('webpack');
var packageData = require('./package.json');
var filename = [packageData.name, 'js'];



module.exports = {
  entry: [path.resolve(__dirname, 'src/app/index.jsx'), path.resolve(__dirname, 'src/menuBar.js')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: "dist/",
    filename: filename.join('.')
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
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
