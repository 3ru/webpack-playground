# Setup

## Important: Custom Webpack Build Required

Since ESM HMR support is still in PR #19616 and not yet released, you need to build webpack from source:

```bash
# Clone webpack repo and checkout ESM HMR branch
git clone https://github.com/webpack/webpack.git
cd webpack
git fetch origin pull/19616/head:esm-hmr
git checkout esm-hmr

# Build and create package
pnpm install
pnpm pack

# Install the generated .tgz file in this project
cd /path/to/this/project
pnpm add file:/path/to/webpack-5.99.9.tgz
```

After installing the custom webpack build, you can run the demo with `pnpm start`. 