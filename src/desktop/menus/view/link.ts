import { View } from "../../view";
import { Flags } from ".";
import { appWindow } from "../..";
import { net, clipboard } from "electron";

export const getLinkMenu = (view: View, flags: Flags) => {
    return [
        {
            label: "Open link in new tab",
            click: () => {
                appWindow.window.webContents.send('add-tab', { url: flags.linkURL, active: false })
            }
        },
        {
            type: "separator"
        },
        {
            label: "Save link as...",
            click: () => {
                appWindow.window.webContents.downloadURL(flags.linkURL)
            }
        },
        {
            label: "Copy link address",
            click: () => {
                clipboard.writeText(flags.linkURL, "clipboard")
            }
        },
        {
            type: "separator",
        }
    ]
}