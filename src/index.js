const { app, BrowserWindow, ipcMain } = require('electron');
const ipc = ipcMain;

function createWindow() {
  const win = new BrowserWindow({
    height: 600,
    width: 1200,
    minHeight: 600,
    minWidth: 800,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
      webviewTag: true
    },

    // electron icon
    icon: __dirname + '/img/icon.png',


    // icon: path.join(__dirname, 'assets', 'img', 'icon.png'),
    title: require('../package.json').name,
  });

  win.setTitle('Music');
  win.loadFile('src/index.html');

  // CLOSE APP
  ipc.on('closeApp', () => {
    console.log('[index.js] closeApp()');
    win.close()
  })

  // MINIMIZE APP
  ipc.on('minimizeApp', () => {
    console.log('[index.js] minimizeApp()')
    win.minimize()
  })

  // MAXIMIZE RESTORE APP
  ipc.on('maximizeRestoreApp', () => {
    console.log('[index.js] maximizeRestoreApp()')
    if(win.isMaximized()) {
      win.restore()
    }
    else {
      win.maximize()
    }
  })
};




app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});