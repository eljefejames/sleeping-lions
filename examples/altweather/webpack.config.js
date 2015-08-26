var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
  entry: path.resolve(ROOT_PATH, 'js/app'),
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ["", ".jsx", ".js"],
  },
  module: {
  loaders: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel'
    }
  ]
},
  devServer: {
    colors: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },

  plugins: [
     new webpack.HotModuleReplacementPlugin(),
    new HtmlwebpackPlugin({
      title: 'Lukes Alt Weather app',
      template: "index.html",
      inject: 'body'

    })
  ]
};
