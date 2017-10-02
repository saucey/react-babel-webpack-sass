const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/app.html',
  // filename: 'app.html',
  inject: 'body'
})
module.exports = {
  entry: './src/app.js',
  output: {
    // path: './bin',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  devServer: {
    inline:true,
    port: 8888
  },
  plugins: [HtmlWebpackPluginConfig]
};

