import { Menu, MenuItem } from "electron";
import { appWindow } from "..";
import { NAVIGATION_HEIGHT } from "../../renderer/constants/window";
import { NEWTAB_URL, REPORT_ISSUES_URL, HELP_CENTRE_URL } from "../../renderer/constants/web";

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
            accelerator: "CmdOrCtrl+Shift+P"
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
                    accelerator: "Alt+Shift+I",
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