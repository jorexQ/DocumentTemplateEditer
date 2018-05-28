import {app, BrowserWindow} from 'electron'
import * as path from 'path'
import * as url from 'url'

let win : Electron.BrowserWindow;

app.on('ready', async () => {
    
    
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar to stay active
    // until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});