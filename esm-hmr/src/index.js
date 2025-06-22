// Import ES module
import { greeting, updateDisplay } from './module.js';

// Create and display content
const container = document.createElement('div');
container.id = 'app';
document.body.appendChild(container);

// Initial display
updateDisplay(container);

// HMR setup
if (import.meta.webpackHot) {
    console.log('HMR is enabled!');
    
    // Accept this module
    import.meta.webpackHot.accept();
    
    // Accept updates for module.js
    import.meta.webpackHot.accept('./module.js', () => {
        console.log('module.js updated!');
        // Re-import the updated module
        import('./module.js').then(newModule => {
            newModule.updateDisplay(container);
        });
    });
}