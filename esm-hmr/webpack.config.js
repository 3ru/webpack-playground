const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    module: true,              // ESM Output
    clean: true                // Clean old build files
  },
  experiments: {
    outputModule: true         // ESM Output
  },
  devtool: false,             // Disable eval to support import.meta
  devServer: {
    hot: true,                 // HMR
    static: path.resolve(__dirname, 'public'),  // Set static files root
    liveReload: false          // Disable automatic page reload
  }
};