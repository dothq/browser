import { BrowserWindow, app, Menu } from 'electron';
import { resolve } from 'path';
import { View } from './view';
import { startMessagingAgent } from './messaging';
import { getAppMenu } from './menus/app';

export class AppWindow {
    public window: BrowserWindow;

    public views: View[] = [];
    
    public selectedId: string;

    constructor() {
        this.window = new BrowserWindow({
          frame: false,
          minWidth: 500,
          minHeight: 450,
          width: 1280,
          height: 720,
          show: false,
          title: app.name,
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

        startMessagingAgent()

        Menu.setApplicationMenu(getAppMenu(app.name))

        if(process.env.ENV == "development") {
          this.window.loadURL('http://localhost:9010/app.html')
        } else {
          this.window.loadURL("file:///" + resolve(`${app.getAppPath()}/build/app.html`))
        }

        this.window.on('ready-to-show', () => {
          this.window.show()
        })

        this.window.on('maximize', () => {
          this.window.webContents.send('app-display-changed', true)
          this.rearrangeView()
        })

        this.window.on('restore', () => {
          this.window.webContents.send('app-display-changed', false)
          this.rearrangeView()
        })

        this.window.on('resize', () => this.rearrangeView())
    };

    rearrangeView() {
      this.views.find(view => view.id == this.selectedId).rearrange()
    }

    public getViewFromId(id: string) {
      return this.views.find(view => view.id == id)
    }
}