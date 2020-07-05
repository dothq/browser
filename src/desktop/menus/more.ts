import { Menu, MenuItem, ipcRenderer } from "electron";
import { appWindow } from "..";
import { NAVIGATION_HEIGHT } from "../../ui/constants/window";
import { NEWTAB_URL, REPORT_ISSUES_URL, HELP_CENTRE_URL, BOOKMARKS_URL, SETTINGS_URL } from "../../ui/constants/web";

export const getMoreMenu = (appName) => {
    const menu = Menu.buildFromTemplate([
        {
            label: "New tab",
            accelerator: "CmdOrCtrl+T",
            click: () => {
                appWindow.window.webContents.send('add-tab', { url: NEWTAB_URL, active: true })
            }
        },
        {
            label: "New window",
            accelerator: "CmdOrCtrl+N"
        },
        {
            label: "New private window",
            accelerator: "CmdOrCtrl+Shift+N"
        },
        {
            type: ("separator" as any)
        },
        {
            label: "History",
            type: ("submenu" as any),
            submenu: [
                {
                    label: "No items",
                    enabled: false
                }
            ]
        },
        {
            label: "Downloads",
            type: ("submenu" as any),
            submenu: [
                {
                    label: "No items",
                    enabled: false
                }
            ]
        },
        {
            label: "Bookmarks",
            type: ("submenu" as any),
            id: "bookmarksMenu",
            submenu: [
                {
                    label: "Bookmark this tab...",
                    accelerator: "Ctrl+D",
                    click: () => {
                        appWindow.window.webContents.send(`tab-bookmark-${appWindow.selectedId}`)
                    }
                },
                {
                    type: ("separator" as any)
                },
                {
                    label: "Show bookmarks bar",
                    type: ("checkbox" as any),
                    id: "showBookmarksBar",
                    checked: true,
                    click: () => {
                        const currentValue = appWindow.storage.db.settings.getAllData()[0].appearance.showBookmarksBar
        
                        appWindow.storage.db.settings.update({ "appearance.showBookmarksBar": currentValue }, { $set: { "appearance.showBookmarksBar": !currentValue } }, { multi: true })
        
                        setTimeout(() => {
                            appWindow.window.webContents.send('refetch-storage', true)
                            appWindow.selectedView.rearrange()
                        }, 100);
                    }
                },
                {
                    label: "Bookmark manager",
                    accelerator: "Ctrl+Shift+O",
                    click: () => {
                        appWindow.window.webContents.send('add-tab', { url: BOOKMARKS_URL, active: true })
                    }
                },
                {
                    type: ("separator" as any)
                }
            ]
        },
        {
            type: ("separator" as any)
        },
        {
            label: "Print...",
            accelerator: "CmdOrCtrl+P",
            click: () => {
                appWindow.selectedView.view.webContents.print()
            }
        },
        {
            label: "Cast..."
        },
        {
            label: "Find...",
            accelerator: "CmdOrCtrl+F"
        },
        {
            label: "More tools",
            type: ("submenu" as any),
            submenu: [
                {
                    label: "No items",
                    enabled: false
                }
            ]
        },
        {
            type: ("separator" as any)
        },
        {
            label: "Settings",
            click: () => {
                appWindow.window.webContents.send('add-tab', { url: SETTINGS_URL, active: true })
            }
        },
        {
            label: "Help",
            type: ("submenu" as any),
            submenu: [
                {
                    label: `About ${appName}`,
                    role: "about" as "about"
                },
                {
                    label: "Help centre",
                    click: () => {
                        appWindow.window.webContents.send('add-tab', { url: HELP_CENTRE_URL, active: true })
                    }
                },
                {
                    label: "Report an issue...",
                    accelerator: "Option+Shift+I",
                    click: () => {
                        appWindow.window.webContents.send('add-tab', { url: REPORT_ISSUES_URL, active: true })
                    }
                }
            ]
        },
        {
            type: ("separator" as any)
        },
        {
            label: "Exit",
            role: ("quit" as "quit")
        },
    ])

    return menu;
}