const { app, BrowserWindow } = require("electron");
// app -- controls app's event lifecycle
// BrowserWindow -- creates and manages app windows.

const createWindow = () => {
   const win = new BrowserWindow({
	   width: 600,
	   height: 800
   });

   win.loadFile('./src/index.html');
};

app.whenReady().then(() => {
   createWindow();
});
