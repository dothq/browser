import { View } from "../../view";
import { Flags } from ".";
import { app } from "electron";
import { appWindow } from "../..";
import { SEARCH_ENGINE_URL } from "../../../ui/constants/web";

export const getSpellcheckMenu = (view: View, flags: Flags) => {
    let menu = [];

    if(flags.dictionarySuggestions.length == 0) {
        menu = menu.concat([
            {
                label: `No corrections for "${flags.misspelledSnippet}"`,
                enabled: false
            }
        ])
    } else {
        for (const suggestion of flags.dictionarySuggestions) {
            menu.push({
                label: suggestion,
                click: () => {
                    view.view.webContents.replaceMisspelling(suggestion)
                }
            })
        }
    }

    menu = menu.concat([
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
            type: "separator",
        },
        {
            label: "Cut",
            enabled: flags.editFlags.canCut,
            accelerator: "CmdOrCtrl+X",
            role: "cut"
        },
        {
            label: "Copy",
            enabled: flags.editFlags.canCopy,
            accelerator: "CmdOrCtrl+C",
            role: "copy"
        },
        {
            label: "Paste",
            enabled: flags.editFlags.canPaste,
            accelerator: "CmdOrCtrl+V",
            role: "pasteAndMatchStyle"
        },
        {
            type: "separator",
        }
    ])

    return menu;
}