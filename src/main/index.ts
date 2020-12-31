import { join } from 'path';
import { app, BrowserWindow } from 'electron';
import is_dev from 'electron-is-dev';
import dotenv from 'dotenv';

dotenv.config();

function createWindow() {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  const URL = is_dev
    ? `http://localhost:${process.env.PORT}` // vite 启动的服务器地址
    : `file://${join(__dirname, '../render/index.html')}`; // vite 构建后的静态文件地址

  win?.loadURL(URL);
}

app.whenReady().then(createWindow);