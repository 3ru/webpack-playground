const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    module: true               // ESM Output
  },
  experiments: {
    outputModule: true         // ESM Output
  },
  devServer: {
    hot: true,                 // HMR
    static: path.resolve(__dirname, 'public')  // Set static files root
  }
};
