import { Menu } from "electron";
import { appWindow } from "..";
import { NEWTAB_URL } from "../../ui/constants/web";

export const showTabMenu = (id, x, y) => {
    const view = appWindow.getViewFromId(id)
    if(!view) return;
 
    const currentIndex = appWindow.getViewIndex(view.id);

    const menu = Menu.buildFromTemplate([
        {
            label: "New tab to the right",
            click: () => {
                appWindow.window.webContents.send('add-tab', { url: NEWTAB_URL, active: true })
            }
        },
        {
            type: ("separator" as any)
        },
        {
            label: "Reload",
            accelerator: "CmdOrCtrl+R",
            click: () => {
                view.view.webContents.reload()
            }
        },
        {
            label: "Duplicate",
            click: () => {
                appWindow.window.webContents.send('add-tab', { url: view.url, active: true })
            }
        },
        {
            label: "Pin",
            visible: !view.pinned,
            click: () => {
                view.pinned = !view.pinned;
                appWindow.window.webContents.send(`view-isPinned-updated-${view.id}`, true)
            }
        },
        {
            label: "Unpin",
            visible: view.pinned,
            click: () => {
                view.pinned = !view.pinned;
                appWindow.window.webContents.send(`view-isPinned-updated-${view.id}`, false)
            }
        },
        {
            label: "Mute site",
            enabled: view.mediaState == 'playing',
            visible: !view.view.webContents.audioMuted,
            click: () => {
                if(view.mediaState == '') return;
                view.view.webContents.audioMuted = true
                appWindow.window.webContents.send(`view-mediaState-updated-${view.id}`, 'muted')
            }
        },
        {
            label: "Unmute site",
            visible: view.view.webContents.audioMuted,
            click: () => {
                view.view.webContents.audioMuted = false
                appWindow.window.webContents.send(`view-mediaState-updated-${view.id}`, 'playing')
            }
        },
        {
            type: ("separator" as any)
        },
        {
            label: "Close",
            accelerator: "CmdOrCtrl+W",
            click: () => {
                appWindow.window.webContents.send('close-tab', view.id)
            }
        },
        {
            label: "Close other tabs",
            enabled: appWindow.views.length > 1,
            click: () => {
                const views = appWindow.views;

                const selectedId = view.id;

                for (const iview of views) {
                    if(iview && iview.id !== selectedId) appWindow.window.webContents.send('close-tab', iview.id)
                }
            }
        },
        {
            label: "Close tabs to the right",
            enabled: (currentIndex + 1) < appWindow.views.length,
            click: () => {
                const views = appWindow.views.slice(currentIndex + 1);

                const selectedId = view.id;

                for (const iview of views) {
                    if(iview && iview.id !== selectedId) appWindow.window.webContents.send('close-tab', iview.id)
                }
            }
        }
    ])

    menu.popup({ x, y })
}