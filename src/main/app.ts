import { BrowserWindow, app } from 'electron';
import { resolve } from 'path';
import { View } from './view';

export class AppWindow {
    public window: BrowserWindow;

    public views: View[] = [];

    constructor() {
        this.window = new BrowserWindow({
          frame: false,
          minWidth: 500,
          minHeight: 450,
          width: 1280,
          height: 720,
          show: false,
          title: 'Dot Browser',
          titleBarStyle: 'hiddenInset',
          maximizable: true,
          webPreferences: {
            plugins: true,
            nodeIntegration: true,
            contextIsolation: false,
            experimentalFeatures: true,
            webviewTag: true,
            webSecurity: false,
            enableRemoteModule: true
          },
        })

        this.window.setBackgroundColor('#000000')

        if(process.env.ENV == "development") {
          this.window.loadURL('http://localhost:9010/app.html')
        } else {
          this.window.loadURL("file:///" + resolve(`${app.getAppPath()}/dist/app.html`))
        }

        this.window.on('ready-to-show', () => {
          this.window.show()
        })
    };
}