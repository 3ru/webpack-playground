const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath can be dynamically changed (vulnerability source)
    publicPath: '/',
    // Enable ESM output
    module: true
  },
  experiments: {
    // Enable ESM support
    outputModule: true
  },
  devServer: {
    hot: true,
    port: 8080,
    static: path.join(__dirname, 'public'),
    headers: {
      // Allow CORS for demo purposes
      'Access-Control-Allow-Origin': '*'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};