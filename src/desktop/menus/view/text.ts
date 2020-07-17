import { View } from "../../view";
import { Flags } from ".";
import { app } from "electron";
import { appWindow } from "../..";
import { SEARCH_ENGINE_URL } from "../../../ui/constants/web";

export const getTextMenu = (view: View, flags: Flags) => {
    return [
        {
            label: "Copy",
            enabled: flags.editFlags.canCopy,
            accelerator: "CmdOrCtrl+C",
            role: "copy"
        },
        {
            label: `Search for "${flags.selectionSnippet}"`,
            visible: flags.selectionText !== '' && flags.inputFieldType !== "password",
            click: () => {
                const url = `${SEARCH_ENGINE_URL}${flags.selectionText}`

                appWindow.window.webContents.send('add-tab', { url, active: true })
            }
        },
        {
            label: "Print...",
            accelerator: "CmdOrCtrl+P"
        },
        {
            type: "separator",
        }
    ]
}