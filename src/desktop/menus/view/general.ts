import { View } from "../../view";

export const getGeneralMenu = (view: View) => {
    return [
        {
            label: "Back",
            accelerator: "Alt+Left",
            click: () => {
                view.view.webContents.goBack()
            }
        },
        {
            label: "Forward",
            accelerator: "Alt+Right",
            click: () => {
                view.view.webContents.goForward()
            }
        },
        {
            label: "Reload",
            accelerator: "CmdOrCtrl+R",
            click: () => {
                view.view.webContents.reload()
            }
        },
        {
            type: "separator"
        },
        {
            label: "Save As",
            accelerator: "CmdOrCtrl+S",
        },
        {
            label: "Print",
            accelerator: "CmdOrCtrl+P"
        },
        {
            label: "Send to device",
            accelerator: "CmdOrCtrl+I"
        },
        {
            type: "separator",
        },
        {
            label: "View Page Source",
            accelerator: "CmdOrCtrl+U",
            click: () => {
                view.view.webContents.loadURL(`view-source:${view.url}`)
            }
        }
    ]
}