import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'library.mjs',
    module: true,
    library: {
      type: 'modern-module'
    },
    chunkFormat: 'module',
    clean: true
  },
  experiments: {
    outputModule: true
  },
  externalsType: 'module',
  externals: {
    // Treat as external modules - in real projects these would be npm installed
    'lodash': 'lodash',
    'react': 'react',
    'react-dom': 'react-dom',
    'date-fns': 'date-fns',
    '@mui/material': '@mui/material',
    'axios': 'axios'
  },
  optimization: {
    concatenateModules: true,  // This setting enables ESM external module analysis
    usedExports: true,         // Required for tree-shaking
    sideEffects: false,        // Maximize tree-shaking
    minimize: false            // Keep output readable
  },
  resolve: {
    extensions: ['.js', '.mjs']
  }
};