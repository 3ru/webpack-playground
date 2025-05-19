// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'dist.mjs',
    path: path.resolve(__dirname, 'dist'),
    module: true,
    library: { type: 'modern-module' }
  },
  experiments: { outputModule: true },
  optimization: {
    usedExports: true,
    minimize: false,
    moduleIds: "natural",     // 連番 ID
    chunkIds: "natural"
  },
  devtool: false,              // ソースマップを完全に無効化
};
