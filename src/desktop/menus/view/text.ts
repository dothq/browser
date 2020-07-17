import { View } from "../../view";
import { Flags } from ".";
import { app } from "electron";

export const getTextMenu = (view: View, flags: Flags) => {
    const { x, y } = flags;

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
                app.showEmojiPanel()
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