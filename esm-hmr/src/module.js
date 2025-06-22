// ES Module that will be hot-reloaded
export const greeting = "Hello from ES Module!";

export function updateDisplay(element) {
    element.innerHTML = `
        <h1>${greeting}</h1>
        <p>Time: ${new Date().toLocaleTimeString()}</p>
        <p>Edit this message in src/module.js to test HMR!</p>
    `;
}