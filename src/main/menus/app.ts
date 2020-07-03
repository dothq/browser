import { Menu, MenuItem, app } from "electron";
import { appWindow } from "..";
import { NEWTAB_URL } from "../../renderer/constants/web";

export const getAppMenu = (appName) => {
    const menu = Menu.buildFromTemplate([
        {
            label: appName,
            type: "submenu" as "submenu",
            submenu: [
                {
                    label: `About ${appName}`,
                    role: "about" as "about"
                },
                {
                    label: "Check for Updates",
                },
                { 
                    type: "separator" as "separator"
                },
                {
                    label: "Browser Settings",
                    accelerator: "CmdOrCtrl+Shift+P",
                },
                {
                    label: "Clear Browsing Data...",
                    accelerator: "CmdOrCtrl+Shift+Backspace",
                },
                {
                    type: "separator" as "separator"
                },
                {
                    role: "services" as "services"
                },
                {
                    type: "separator" as "separator"
                },
                {
                    role: "hide" as "hide"
                },
                {
                    role: "hideOthers" as "hideOthers"
                },
                {
                    role: "unhide" as "unhide"
                },
                {
                    type: "separator" as "separator"
                },
                {
                    role: "quit" as "quit",
                    accelerator: "CmdOrCtrl+Q"
                },
            ]
        },
        {
            label: "File",
            type: "submenu" as "submenu",
            submenu: [
                {
                    label: "New Tab",
                    accelerator: "CmdOrCtrl+T",
                    click: () => {
                        appWindow.window.webContents.send('add-tab', { url: NEWTAB_URL, active: true })
                    }
                },
                {
                    label: "New Window",
                    accelerator: "CmdOrCtrl+N"
                },
                {
                    label: "New Private Window",
                    accelerator: "CmdOrCtrl+Shift+N"
                },
                {
                    label: "Reopen Closed Tab",
                    accelerator: "CmdOrCtrl+Shift+T"
                },
                {
                    label: "Open File...",
                    accelerator: "CmdOrCtrl+O"
                },
                {
                    label: "Open Location...",
                    accelerator: "CmdOrCtrl+L"
                },
                {
                    type: "separator" as "separator"
                },
                {
                    label: "Close Window",
                    accelerator: "CmdOrCtrl+Q",
                    click: () => {
                        appWindow.window.close()
                    }
                },
                {
                    label: "Close Tab",
                    accelerator: "CmdOrCtrl+W",
                    click: () => {
                        appWindow.window.webContents.send('close-tab', appWindow.selectedId)
                    }
                },
                {
                    label: "Save Page As...",
                    accelerator: "CmdOrCtrl+S"
                },
                {
                    type: "separator" as "separator"
                },
                {
                    label: "Print",
                    accelerator: "CmdOrCtrl+P"
                }
            ]
        },
        {
            label: "Edit",
            role: "editMenu"
        },
        {
            label: "View",
            type: "submenu" as "submenu",
            submenu: [
                {
                    label: "Always Show Bookmarks Bar",
                    accelerator: "CmdOrCtrl+Shift+B",
                    type: ("checkbox" as any),
                     // todo: migrate old nedb code to sqlite
                    // checked: typeof(appWindow) !== "undefined" && appWindow.storage.db.settings.getAllData()[0].appearance.showBookmarksBar,
                    click: () => {
                         // todo: migrate old nedb code to sqlite
                        // const currentValue = appWindow.storage.db.settings.getAllData()[0].appearance.showBookmarksBar
        
                        // appWindow.storage.db.settings.update({ "appearance.showBookmarksBar": currentValue }, { $set: { "appearance.showBookmarksBar": !currentValue } }, { multi: true })
                    
                        // appWindow.storage.db.settings.getAllData()[0].appearance
        
                        // appWindow.window.webContents.send('refetch-storage')
                    }
                },
                {
                    label: "Always Show Toolbar in Full Screen",
                    accelerator: "CmdOrCtrl+Shift+F",
                    type: "checkbox" as "checkbox"
                },
                {
                    type: "separator" as "separator"
                },
                {
                    label: "Stop",
                    accelerator: "CmdOrCtrl+Period",
                    enabled: appWindow && appWindow.getViewFromId(appWindow.selectedId).view.webContents.isLoading(),
                    click: () => {
                        const view = appWindow.getViewFromId(appWindow.selectedId)

                        view.view.webContents.stop()
                    }
                },
                {
                    label: "Reload This Page",
                    accelerator: "CmdOrCtrl+R",
                    enabled: appWindow && !appWindow.getViewFromId(appWindow.selectedId).view.webContents.isLoading(),
                    click: () => {
                        const view = appWindow.getViewFromId(appWindow.selectedId)

                        view.view.webContents.reload()
                    }
                },
                {
                    label: "Refresh This Page",
                    accelerator: "F5",
                    acceleratorWorksWhenHidden: true,
                    visible: false,
                    enabled: appWindow && !appWindow.getViewFromId(appWindow.selectedId).view.webContents.isLoading(),
                    click: () => {
                        const view = appWindow.getViewFromId(appWindow.selectedId)

                        view.view.webContents.reload()
                    }
                },
                {
                    type: "separator" as "separator"
                },
                {
                    label: "Enter Full Screen",
                    accelerator: "Super+Ctrl+F"
                },
                {
                    label: "Actual Size",
                    accelerator: "CmdOrCtrl+0"
                },
                {
                    label: "Zoom In",
                    accelerator: "CmdOrCtrl+="
                },
                {
                    label: "Zoom In",
                    acceleratorWorksWhenHidden: true,
                    visible: false,
                    accelerator: "CmdOrCtrl+Plus"
                },
                {
                    label: "Zoom Out",
                    accelerator: "CmdOrCtrl+-"
                },
                {
                    type: "separator" as "separator"
                },
                {
                    label: "Developer",
                    type: "submenu" as "submenu",
                    submenu: [
                        {
                            label: "Toggle Developer Tools",
                            accelerator: "CmdOrCtrl+Shift+I",
                            click: () => {
                                const view = appWindow.getViewFromId(appWindow.selectedId)
        
                                view.view.webContents.toggleDevTools()
                            }
                        },
                        {
                            label: "Toggle App Developer Tools",
                            accelerator: "CmdOrCtrl+Alt+F8",
                            click: () => {
                                appWindow.window.webContents.openDevTools({ mode: 'detach' })
                            }
                        }
                    ]
                },
            ]
        },
        {
            label: "History",
            type: "submenu" as "submenu",
            submenu: [
                {
                    label: "Home",
                    accelerator: "CmdOrCtrl+Shift+H",
                    click: () => {
                        const view = appWindow.getViewFromId(appWindow.selectedId)

                        view.view.webContents.loadURL(NEWTAB_URL)
                    }
                },
                {
                    label: "Back",
                    accelerator: "CmdOrCtrl+[",
                    click: () => {
                        const view = appWindow.getViewFromId(appWindow.selectedId)

                        view.view.webContents.goBack()
                    }
                },
                {
                    label: "Forward",
                    accelerator: "CmdOrCtrl+]",
                    click: () => {
                        const view = appWindow.getViewFromId(appWindow.selectedId)

                        view.view.webContents.goForward()
                    }
                },
                {
                    type: "separator" as "separator"
                },
                {
                    label: "Recently Closed",
                    enabled: false
                },
                {
                    label: "   (empty)",
                    enabled: false
                },
                {
                    type: "separator" as "separator"
                },
                {
                    label: "Recently Visited",
                    enabled: false
                },
                {
                    label: "   (empty)",
                    enabled: false
                },
                {
                    type: "separator" as "separator"
                },
                {
                    label: "Show Full History",
                    accelerator: "CmdOrCtrl+Y"
                },
            ]
        },
        {
            label: "Bookmarks",
            type: "submenu" as "submenu",
            submenu: [
                {
                    label: "Bookmark Manager",
                    accelerator: "CmdOrCtrl+Alt+B"
                },
                {
                    label: "Bookmark This Tab...",
                    accelerator: "CmdOrCtrl+D"
                },
                {
                    label: "Bookmark All Tabs...",
                    accelerator: "CmdOrCtrl+Alt+Shift+D"
                },
                {
                    type: "separator" as "separator"
                },
                {
                    label: "Bookmarks",
                    enabled: false
                },
                {
                    label: "(empty)",
                    enabled: false
                },
            ]
        },
        {
            label: "ID",
            type: "submenu" as "submenu",
            submenu: [
                {
                    label: "Me",
                    enabled: false
                },
                {
                    label: "   Username: EnderDev",
                    enabled: false
                },
                {
                    label: "   Email: kieran@dothq.co",
                    enabled: false
                },
                {
                    type: "separator" as "separator"
                },
                {
                    label: "View my Account Details"
                },
                {
                    label: "Sync 3 items...",
                    accelerator: "CmdOrCtrl+;"
                },
                {
                    label: "Log out of EnderDev"
                },
            ]
        },
        {
            label: "Tab",
            type: "submenu" as "submenu",
            submenu: [
                {
                    label: "Select Next Tab",
                    accelerator: "Ctrl+Tab"
                },
                {
                    label: "Select Previous Tab",
                    accelerator: "Ctrl+Shift+Tab"
                },
                {
                    label: "Duplicate tab",
                },
                {
                    label: "Mute Site",
                    type: "checkbox" as "checkbox"
                },
                {
                    label: "Pin Tab",
                    type: "checkbox" as "checkbox"
                },
                {
                    type: "separator" as "separator"
                },
                {
                    label: "Close Other Tabs"
                },
                {
                    label: "Close Tabs to the Right"
                },
                {
                    label: "Move tab to new window"
                },
                {
                    type: "separator" as "separator"
                },
                {
                    label: "(empty)",
                    enabled: false
                }
            ]
        },
        {
            label: "Window",
            type: "submenu" as "submenu",
            submenu: [
                {
                    label: "Downloads",
                    accelerator: "CmdOrCtrl+Shift+J"
                },
                {
                    label: "Extensions",
                },
                {
                    label: "Task Manager",
                }
            ]
        },
        {
            label: "Help",
            role: "help",
            submenu: [
                {
                    label: `${appName} Support`,
                    accelerator: "F1",
                    click: () => {
                        appWindow.window.webContents.send('create-view', { url: "https://support.dothq.co", active: true })
                    }
                },
                {
                    label: "Release Notes"
                },
                {
                    label: "Report an issue",
                    accelerator: "CmdOrCtrl+!"
                }
            ]
        }
    ])

    return menu;
}