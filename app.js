"use strict";
const ELECTRON = require('electron');
const {app, BrowserWindow, ipcMain} = ELECTRON;

let mainWindow;

app.on('ready', createAppWindow);

ipcMain.on('windowControls-min', function(event, arg){
    mainWindow.minimize();
});

ipcMain.on('windowControls-max', function(event, arg){
    mainWindow.maximize();
});

ipcMain.on('windowControls-quit', function(event, arg){
    app.quit();
});

function createAppWindow(){
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 800,
        frame: false
    });

    mainWindow.loadFile('./content/index.html');

    mainWindow.on('close', function(){
        mainWindow = null;
    });
}