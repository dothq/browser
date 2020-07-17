import { View } from "../../view";
import { Flags } from ".";
import { app } from "electron";
import { platform } from 'os';
import { SEARCH_ENGINE_URL } from "../../../ui/constants/web";
import { appWindow } from "../..";

export const getInputMenu = (view: View, flags: Flags) => {
    const os = platform();
    const emojiPanelVisible = os == "win32" || os == "darwin"

    return [
        {
            label: "Emoji",
            visible: emojiPanelVisible,
            accelerator: os == "win32" ? "Super+." : "Super+Ctrl+Space",
            click: () => {
                if(emojiPanelVisible) app.showEmojiPanel()
            }
        },
        {
            type: "separator",
        },
        {
            role: "undo",
            enabled: flags.editFlags.canUndo,
            visible: flags.selectionText == '',
            accelerator: "CmdOrCtrl+Z"
        },
        {
            role: "redo",
            enabled: flags.editFlags.canRedo,
            visible: flags.selectionText == '',
            accelerator: "CmdOrCtrl+Shift+Z"
        },
        {
            type: "separator",
            visible: flags.selectionText == '',
        },
        {
            role: "cut",
            enabled: flags.editFlags.canCut,
            accelerator: "CmdOrCtrl+X"
        },
        {
            role: "copy",
            enabled: flags.editFlags.canCopy,
            accelerator: "CmdOrCtrl+C"
        },
        {
            label: "Paste",
            role: "pasteAndMatchStyle",
            enabled: flags.editFlags.canPaste,
            accelerator: "CmdOrCtrl+V"
        },
        {
            label: "Paste as plain text",
            role: "paste",
            enabled: flags.editFlags.canPaste,
            accelerator: "CmdOrCtrl+Shift+V"
        },
        {
            role: "selectAll",
            enabled: flags.editFlags.canSelectAll,
            accelerator: "CmdOrCtrl+A"
        },
        {
            type: "separator",
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