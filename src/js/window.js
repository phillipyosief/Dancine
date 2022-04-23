console.log('[window.js] loaded')

const { ipcRenderer } = require('electron');
const ipc = ipcRenderer;

// // Close App
// closeBtn.addEventListener('click', () => {
//     ipc.send('closeApp');
// });
// 
// // Minimize App
// minimizeBtn.addEventListener('click', () => {
//     ipc.send('minimizeApp');
// });
// 
// // Maximize Restore App
// maxResBtn.addEventListener('click', () => {
//     ipc.send('maximizeRestoreApp');
// });

function close_app() {
    console.log('[window.js] close_app()')
    ipc.send('closeApp');
}

function minimize_app() {
    console.log('[window.js] minimize_app()')
    ipc.send('minimizeApp');
}

function maximizeRestore() {
    console.log('[window.js] maximizeRestore()')
    ipc.send('maximizeRestoreApp');
}