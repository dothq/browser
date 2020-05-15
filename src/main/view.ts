import { BrowserView, app, ContextMenuParams, ipcRenderer } from "electron";
import { resolve } from "path";
import { appWindow } from ".";
import { NAVIGATION_HEIGHT } from "../renderer/app/constants/window";
import { getGeneralMenu } from "./menus/general";

export class View {
    public view: BrowserView;
    public id: string;

    constructor(id: string, url: any) {
        this.id = id;

        this.view = new BrowserView({
            webPreferences: {
                sandbox: true,
                preload: resolve(app.getAppPath(), "build", "preload.js"),
                nodeIntegration: false,
                additionalArguments: [`--tab-id=${id}`],
                contextIsolation: true,
                partition: 'persist:view',
                scrollBounce: true
            }
        })

        this.view.setBackgroundColor("#fff");

        this.view.webContents.on('did-start-loading', (_e) => {
            appWindow.window.webContents.send('view-created', { id, url })
        })

        this.view.webContents.userAgent =
          this.view.webContents.userAgent
          .replace(/ dot\\?.([^\s]+)/g, '')
          .replace(/ Electron\\?.([^\s]+)/g, '')
          .replace(/Chrome\\?.([^\s]+)/g, `Chrome/81.0.4044.122`)

        this.view.setAutoResize({ width: true, height: true, horizontal: false, vertical: false });
        this.view.webContents.loadURL(url);

        this.view.webContents.on('context-menu', (_event, params: ContextMenuParams) => {
            const { x, y } = params;

            const id = this.id;

            const generalMenu = getGeneralMenu(id)

            generalMenu.popup({ x, y: y + NAVIGATION_HEIGHT })
        })

        this.view.webContents.on('did-navigate', this.events.viewNavigate)
        this.view.webContents.on('did-navigate-in-page', this.events.viewNavigateInPage)
        this.view.webContents.on('page-title-updated', this.events.viewTitleUpdated)
        this.view.webContents.on('page-favicon-updated', this.events.viewFaviconUpdated)
    }

    public rearrange() {
        let { width, height } = appWindow.window.getBounds()
    
        if(appWindow.window.isMaximized()) {
            width = width - 15
            height = height - 15
        }

        this.view.setBounds({ x: 0, y: NAVIGATION_HEIGHT, width, height: height - NAVIGATION_HEIGHT });
    }

    private get events() {
        return {
            viewNavigate: (_event: any, url: string, httpResponseCode: number, httpStatusText: string) => {
                appWindow.window.webContents.send(`view-data-updated-${this.id}`, { url })
            },
            viewNavigateInPage: (_event: any, url: string, isMainFrame: boolean) => {
                if(isMainFrame) {
                    appWindow.window.webContents.send(`view-data-updated-${this.id}`, { url })
                }
            },
            viewTitleUpdated: (_event: any, title: string) => {
                appWindow.window.webContents.send(`view-data-updated-${this.id}`, { title })
            },
            viewFaviconUpdated: (_event: any, favicons: any[]) => {
                const favicon = favicons[0];

                console.log(favicon)

                appWindow.window.webContents.send(`view-data-updated-${this.id}`, { favicon })
            }
        }
    }
}
