const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const config = require('./config.json');
const Hub = require('./scripts/Hub.js');


let mainWin;
const hub = Hub();


function createMainWindow() {
    mainWin = new BrowserWindow({
        autoHideMenuBar: true,
        webPreferences: {
            preload: path.resolve(__dirname, 'scripts', 'preload.js')
        }
    });

    mainWin.on('closed', () => {
        mainWin = null;
    });

    hub.init(mainWin, config);
}


app.whenReady().then(function() {
    createMainWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow();
        }
    });
});


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});


ipcMain.handle('event', (event, args) => {
    mainWin.webContents.send('app-open', {html: 'apps/Clock/clock.html'});
});
