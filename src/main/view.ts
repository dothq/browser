import { BrowserView, app } from "electron";
import { resolve } from "path";

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

        this.view.webContents.userAgent =
          this.view.webContents.userAgent
          .replace(/ dot\\?.([^\s]+)/g, '')
          .replace(/ Electron\\?.([^\s]+)/g, '')
          .replace(/Chrome\\?.([^\s]+)/g, `Chrome/81.0.4044.122`)

        this.view.setAutoResize({ width: true, height: true, horizontal: false, vertical: false });
        this.view.webContents.loadURL(url);
    }
}