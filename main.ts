import {app, BrowserWindow, screen, globalShortcut} from 'electron'
import electronDebug = require('electron-debug');
import * as path from 'path'
import * as url from 'url'

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.

const localUrl = 'C:\\Users\\Administrator\\AppData\\Local';
const reactDevToolsUrl = 'Google\\Chrome\\User Data\\Default\\Extensions\\fmkadmapgofadopljbjfkapdkoienihi' +
        '\\2.5.0_0';
const reduxDevToolsUrl = 'Google\\Chrome\\User Data\\Default\\Extensions\\lmhkpmbekcpmknklioeibfkpmmfibljd' +
        '\\2.15.1_0';
let win : Electron.BrowserWindow;

function createWindow() {

    electronDebug({showDevTools: true, enabled: true});
    // Create the browser window.
    BrowserWindow.addDevToolsExtension(path.join(localUrl, reactDevToolsUrl));
    BrowserWindow.addDevToolsExtension(path.join(localUrl, reduxDevToolsUrl));

    win = new BrowserWindow({width: 1280, height: 720, frame: false});
    win.maximize();
    win.setMenu(null);
    win.setTitle('electron demo');

    // and load the index.html of the app.
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    win.on('closed', () => {
        win = null
    });

    //globalShortcut.register('', () => {})

    require('devtron').install();
}

// This method will be called when Electron has finished initialization and is
// ready to create browser windows. Some APIs can only be used after this event
// occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar to stay active
    // until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the dock icon is
    // clicked and there are no other windows open.
    if (win === null) {
        createWindow()
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.