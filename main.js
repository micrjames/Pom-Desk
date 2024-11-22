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

// app.on('ready', () => {
app.whenReady().then(() => {
   createWindow();

   app.on('activate', () => {
	  if(BrowserWindow.getAllWindows().length === 0)
		 createWindow();
   });
});

app.on('window-all-closed', () => {
   if(process.platform !== 'darwin')
	  app.quit();
});
