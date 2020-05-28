import { BrowserWindow, app, Menu } from 'electron';
import { resolve } from 'path';
import { View } from './view';
import { startMessagingAgent } from './messaging';
import { getAppMenu } from './menus/app';
import { Storage } from './storage';
import { path } from '../../scripts/webpack.config';

export class AppWindow {
    public window: BrowserWindow;
    public overlay: BrowserWindow;
    public storage: Storage;

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

        this.overlay = new BrowserWindow({
          frame: false,
          minWidth: 500,
          minHeight: 450,
          width: 1280,
          height: 720,
          show: false,
          parent: this.window,
          transparent: true,
          webPreferences: {
            nodeIntegration: true
          }
        })
        this.storage = new Storage()

        startMessagingAgent()

        Menu.setApplicationMenu(getAppMenu(app.name))

        if(process.env.ENV == "development") {
          this.window.loadURL('http://localhost:9010/app.html')
          this.overlay.loadURL('http://localhost:9020/overlay.html')
        } else {
          this.window.loadURL("file:///" + resolve(`${app.getAppPath()}/build/app.html`))
          this.overlay.loadURL("file:///" + resolve(`${app.getAppPath()}/build/overlay.html`))
        }

        this.window.on('ready-to-show', () => {
            this.window.show()
            this.overlay.show()
        })

        this.window.on('maximize', () => {
          this.window.webContents.send('app-display-changed', true)
          this.overlay.webContents.send('app-display-changed', true)
          this.rearrangeView()
        })

        this.window.on('unmaximize', () => {
          this.window.webContents.send('app-display-changed', false)
          this.overlay.webContents.send('app-display-changed', false)
          this.rearrangeView()
        })
    };

    rearrangeView() {
      this.selectedView.rearrange()
    }

    public getViewFromId(id: string) {
      return this.views.find(view => view.id == id)
    }

    public get selectedView() {
      return this.getViewFromId(this.selectedId);
    }
}