"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var electronDebug = require("electron-debug");
var path = require("path");
var url = require("url");
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var localUrl = 'C:\\Users\\Administrator\\AppData\\Local';
var reactDevToolsUrl = 'Google\\Chrome\\User Data\\Default\\Extensions\\fmkadmapgofadopljbjfkapdkoienihi' +
    '\\2.5.0_0';
var reduxDevToolsUrl = 'Google\\Chrome\\User Data\\Default\\Extensions\\lmhkpmbekcpmknklioeibfkpmmfibljd' +
    '\\2.15.1_0';
var win;
function createWindow() {
    electronDebug({ showDevTools: true, enabled: true });
    // Create the browser window.
    electron_1.BrowserWindow.addDevToolsExtension(path.join(localUrl, reactDevToolsUrl));
    electron_1.BrowserWindow.addDevToolsExtension(path.join(localUrl, reduxDevToolsUrl));
    win = new electron_1.BrowserWindow({ width: 1280, height: 720, frame: false });
    win.maximize();
    win.setMenu(null);
    win.setTitle('electron demo');
    // and load the index.html of the app.
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));
    win.on('closed', function () {
        win = null;
    });
    //globalShortcut.register('', () => {})
    require('devtron').install();
}
// This method will be called when Electron has finished initialization and is
// ready to create browser windows. Some APIs can only be used after this event
// occurs.
electron_1.app.on('ready', createWindow);
// Quit when all windows are closed.
electron_1.app.on('window-all-closed', function () {
    // On macOS it is common for applications and their menu bar to stay active
    // until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the dock icon is
    // clicked and there are no other windows open.
    if (win === null) {
        createWindow();
    }
});
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here. 
//# sourceMappingURL=main.js.map