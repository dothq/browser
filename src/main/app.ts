import { BrowserWindow, app, Menu, screen } from 'electron';
import { resolve } from 'path';
import glasstron from 'glasstron';
import { View } from './view';
import { startMessagingAgent } from './messaging';
import { getAppMenu } from './menus/app';
import { Storage } from './storage';
import { Overlay } from './overlay';
import { ServiceManager } from './services';
import { log } from '@dothq/log';

export class AppWindow {
    public window: BrowserWindow;
    public overlay: Overlay;
    public services: ServiceManager = new ServiceManager()

    public storage: Storage;

    public views: View[] = [];
    
    public selectedId: string;
    public fullscreen: boolean;

    constructor() {
        const t = Date.now()

        const { height } = screen.getDisplayNearestPoint(screen.getCursorScreenPoint()).workAreaSize

        this.window = new BrowserWindow({
          frame: false,
          titleBarStyle: "hiddenInset",
          minWidth: 500,
          minHeight: 450,
          x: 15,
          y: 15,
          width: 1300,
          height: height-(15 * 2),
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

        glasstron.update(this.window, {
            macos: {vibrancy: "fullscreen-ui"},
            linux: {requestBlur: true},
            windows: {blurType: "blurbehind"}
        })

        this.overlay = new Overlay(this);

        this.storage = new Storage()

        startMessagingAgent()

        Menu.setApplicationMenu(getAppMenu(app.name))

        if(process.env.ENV == "development") {
          this.window.loadURL('http://localhost:9010/app.html')
          this.window.webContents.openDevTools({ mode: 'detach' })
        } else {
          this.window.loadURL("file:///" + resolve(`${app.getAppPath()}/build/app.html`))
        }

        this.window.on('ready-to-show', () => {
            log(`Loaded application in ${Date.now() - t}ms`)

            this.window.show()
            this.overlay.show()
        })

        this.window.on('resize', () => {
          this.rearrangeView()
        })

        this.window.on('enter-html-full-screen', () => {
          this.fullscreen = true;
          this.rearrangeView()
          this.window.webContents.send('fullscreen', true);
        });
    
        this.window.on('leave-html-full-screen', () => {
          this.fullscreen = false;
          this.rearrangeView()
          this.window.webContents.send('fullscreen', false);
        });
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
