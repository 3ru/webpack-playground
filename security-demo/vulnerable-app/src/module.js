export function displayMessage(element) {
  element.innerHTML = `
    <h2>Webpack HMR Demo</h2>
    <p>This is a simple demo application.</p>
    <p>Current time: ${new Date().toLocaleTimeString()}</p>
  `;
}
