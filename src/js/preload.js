console.log('[preload.js] loaded')

window.addEventListener('load', () => {
    console.log('[preload.js] window.addEventListener(\'load\')')
    
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector);
        if (element) element.innerText = text;
    }

    for (const type of ['chrome', 'node', 'electron']) {
        replaceText(`${type}-version`, process.versions[type]);
    }
});
