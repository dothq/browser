import { Menu } from "electron";
import { appWindow } from "../../";
import { getGeneralMenu } from "./general";
import { getLinkMenu } from "./link";
import { getImageMenu } from "./image";
import { getInputMenu } from "./input";
import { getTextMenu } from "./text";
import { getSpellcheckMenu } from "./spellcheck";

export interface Flags {
    x: number;
    y: number;
    linkURL: string,
    linkText: string,
    pageURL: string,
    frameURL: string,
    srcURL: string,
    mediaType: 'none' | 'image' | 'audio' | 'video' | 'canvas' | 'file' | 'plugin',
    hasImageContents: boolean,
    isEditable: boolean,
    selectionText: string,
    selectionSnippet: string,
    titleText: string,
    misspelledWord: string,
    misspelledSnippet: string,
    dictionarySuggestions: string[],
    frameCharset: string,
    inputFieldType: string,
    menuSourceType: 'none' | 'mouse' | 'keyboard' | 'touch' | 'touchMenu',
    mediaFlags: {
        isError: boolean,
        isPaused: boolean,
        isMuted: boolean,
        hasAudio: boolean,
        isLooping: boolean,
        isControlsVisible: boolean,
        canToggleControls: boolean,
        canRotate: boolean
    },
    editFlags: {
        canUndo: boolean,
        canRedo: boolean,
        canCut: boolean,
        canCopy: boolean,
        canPaste: boolean,
        canDelete: boolean,
        canSelectAll: boolean
    }
}

export const getViewMenu = (tabId, flags: Flags) => {
    const view = appWindow.getViewFromId(tabId)

    let menu = []

    flags.selectionSnippet = 
        flags.selectionText.length >= 32 
            ? flags.selectionText.substr(0, 32) + "…" 
            : flags.selectionText

    flags.misspelledSnippet = 
            flags.misspelledWord.length >= 32 
                ? flags.misspelledWord.substr(0, 32) + "…" 
                : flags.misspelledWord

    const link = getLinkMenu(view, flags);
    const image = getImageMenu(view, flags)
    const input = getInputMenu(view, flags)
    const text = getTextMenu(view, flags)
    const spellcheck = getSpellcheckMenu(view, flags)
    const general = getGeneralMenu(view)

    if(flags.linkURL) menu = menu.concat(link)
    if(flags.mediaType == 'image' && flags.srcURL !== '') menu = menu.concat(image)
    if(flags.inputFieldType == "plainText" || flags.inputFieldType == "other") menu = menu.concat(input)
    if(flags.inputFieldType == "none" && flags.selectionText !== '') menu = menu.concat(text)
    if(flags.misspelledWord !== '') menu = spellcheck
    if(menu.length == 0) menu = menu.concat(general)

    menu = menu.filter(x => (x.type !== "separator" || x.visible !== false))

    menu.push({
        label: "Inspect",
        accelerator: "CmdOrCtrl+Shift+I",
        click: () => {
            view.view.webContents.toggleDevTools()
        }
    })

    return Menu.buildFromTemplate(menu);
}