# Webpack ESM HMR Demo

A minimal demo showcasing Webpack's ESM (ECMAScript Modules) and HMR (Hot Module Replacement) features.

## Setup

1. Build Webpack locally:
```bash
npm pack
```

2. Install the local Webpack build:
```bash
pnpm add /path/to/webpack/webpack-5.99.9.tgz
```

## Development

Start the development server with HMR:
```bash
pnpm exec webpack serve --mode development
```