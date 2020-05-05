import { Menu, MenuItem, app } from "electron";
import { appWindow } from "..";

export const getAppMenu = (appName) => {
    return Menu.buildFromTemplate([
        {
            label: appName,
            type: "submenu" as "submenu",
            submenu: [
                {
                    label: `About ${appName}`,
                },
                {
                    label: "Check for Updates",
                },
                { 
                    type: "separator" as "separator"
                },
                {
                    label: "Preferences",
                    accelerator: "CmdOrCtrl+Comma",
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
                    accelerator: "CmdOrCtrl+T"
                }
            ]
        }
    ])
}