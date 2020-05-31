import { BrowserWindow, app, ipcMain } from 'electron';
import { AppWindow } from './app';
import { resolve } from 'path';

export class Overlay {
    private window: BrowserWindow;
    private appWindow: AppWindow;

    constructor(w: AppWindow) {
        const { window } = w;

        this.appWindow = w;

        this.window = new BrowserWindow({
            frame: false,
            minWidth: 500,
            minHeight: 450,
            width: 1280,
            height: 720,
            show: false,
            parent: window,
            transparent: true,
            webPreferences: {
              nodeIntegration: true
            }
        })

        if(process.env.ENV == "development") {
            this.window.loadURL('http://localhost:9010/overlay.html')
            this.window.webContents.openDevTools({ mode: 'detach' })
        } else {
            this.window.loadURL("file:///" + resolve(`${app.getAppPath()}/build/overlay.html`))
        }
    }

    public show() {
        this.window.show()

        this.setPointerEvents(true)
    }

    public hide() {
        this.window.hide()

        this.setPointerEvents(false)
    }

    public get webContents() {
        return this.window.webContents
    }

    public rearrange() {
        const { width, height, x, y } = this.appWindow.window.getBounds()

        this.window.setBounds({ width, height, x, y })
    }

    public setPointerEvents(allowed: boolean) {
        this.window.setIgnoreMouseEvents(allowed, { forward: true })
    }
}