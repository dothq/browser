import { View } from "../../view";
import { Flags } from ".";
import { appWindow } from "../..";
import { clipboard, NativeImage } from "electron";
import axios from "axios";

export const getImageMenu = (view: View, flags: Flags) => {
    const { x, y } = flags;

    return [
        {
            label: "Open image in new tab",
            click: () => {
                appWindow.window.webContents.send('add-tab', { url: flags.srcURL, active: false })
            }
        },
        {
            label: "Save image as...",
            click: () => {
                appWindow.window.webContents.downloadURL(flags.srcURL)
            }
        },
        {
            label: "Copy image",
            click: () => {
                view.view.webContents.copyImageAt(x, y)
            }
        },
        {
            label: "Copy image address",
            click: () => {
                clipboard.writeText(flags.srcURL, "clipboard")
            }
        },
        {
            type: "separator",
        }
    ]
}