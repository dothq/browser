import { BrowserView, app, ContextMenuParams, ipcRenderer } from "electron";
import { resolve } from "path";
import { appWindow } from ".";
import { NAVIGATION_HEIGHT } from "../renderer/app/constants/window";
import { generalMenu } from "./menus/general";

export class View {
    public view: BrowserView;

    constructor(id: number, url: any) {
        this.view = new BrowserView({
            webPreferences: {
                sandbox: true,
                preload: resolve(app.getAppPath(), "dist", "preload.js"),
                nodeIntegration: false,
                additionalArguments: [`--tab-id=${id}`],
                contextIsolation: true,
                partition: 'persist:view',
                scrollBounce: true,
                plugins: true,
                javascript: true
            }
        })

        this.view.setBackgroundColor("#fff");

        this.view.webContents.on('did-start-loading', (e) => {
            appWindow.window.webContents.send('view-created', { id, url })
        })

        this.view.webContents.userAgent =
          this.view.webContents.userAgent
          .replace(/ dot\\?.([^\s]+)/g, '')
          .replace(/ Electron\\?.([^\s]+)/g, '')
          .replace(/Chrome\\?.([^\s]+)/g, `Chrome/81.0.4044.122`)

        appWindow.window.on('resize', () => {
            const { width, height } = appWindow.window.getBounds()

            this.view.setBounds({ x: 0, y: NAVIGATION_HEIGHT, width, height: height - NAVIGATION_HEIGHT });
        })

        this.view.setAutoResize({ width: true, height: true, horizontal: false, vertical: false });
        this.view.webContents.loadURL(url);

        this.view.webContents.on('context-menu', (event, params: ContextMenuParams) => {
            const { x, y } = params;

            generalMenu.popup({ x, y: y + NAVIGATION_HEIGHT })
        })
    }
}