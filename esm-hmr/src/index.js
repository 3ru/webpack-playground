// Display initial message
document.body.innerText = 'Message: Initial!';

// HMR self-acceptance: If this module is updated, re-execute it
if (import.meta.webpackHot) {
    console.log('HMR accepted');
    import.meta.webpackHot.accept();
}
