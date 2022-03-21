const { BrowserWindow, app, ipcMain,Menu } = require("electron");
const path = require("path");
let win;
///Menu.setApplicationMenu(null);
const mainWindow = () => {

  win = new BrowserWindow({
    width: 1024,
    height: 580,
    minHeight: 580,
    minWidth: 1024,
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      contextIsolation: false,
      preload: path.join(__dirname, "src/preload.js"),
    },
  });
  win.loadFile(path.join(__dirname, "src/screens/index.html"));
  ipcMain.on("download", () => {
    win.webContents.loadFile(path.join(__dirname, "src/screens/download.html"));
  });
  ipcMain.on("converter", () => {
    win.webContents.loadFile(
      path.join(__dirname, "src/screens/converter.html")
    );
  });
  ipcMain.on("maitorrent", () => {
    win.webContents.loadFile(
      path.join(__dirname, "src/screens/maitorrent.html")
    );
  });
   ipcMain.on("setting", () => {
     win.webContents.loadFile(
       path.join(__dirname, "src/screens/setting.html")
     );
   });
    ipcMain.on("home", () => {
      win.webContents.loadFile(
        path.join(__dirname, "src/screens/index.html")
      );
    });
};

app.whenReady().then(() => {
  mainWindow();
});
