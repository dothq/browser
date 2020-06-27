import { BrowserWindow, app, Menu, screen } from 'electron';
import { resolve } from 'path';
import { View } from './view';
import { startMessagingAgent } from './messaging';
import { getAppMenu } from './menus/app';
import { Storage } from './storage';
import { Overlay } from './overlay';
import { ServiceManager } from './services';
import { log } from '@dothq/log';
import { getMoreMenu } from './menus/more';

export class AppWindow {
    public window: BrowserWindow;
    public overlay: Overlay;
    public services: ServiceManager = new ServiceManager()

    public storage: Storage;

    public views: View[] = [];
    
    public selectedId: string;
    public fullscreen: boolean;

    public menu: Menu | null = getMoreMenu(app.name);
    public menuVisible: boolean = false;

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
            nodeIntegration: true
          },
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

            setTimeout(() => {
              this.window.webContents.send('refetch-storage');
              console.log("fetch")
            }, 3000);
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

        this.menu.addListener('menu-will-show', () => {
          this.menuVisible = true;
        })
    
        this.menu.addListener('menu-will-close', () => {
          setTimeout(() => this.menuVisible = false, 100);
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
