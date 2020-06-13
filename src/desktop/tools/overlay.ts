import { View } from "../view";
import { appWindow } from "..";

export const updateMouseBoundries = (allowed: boolean) => {
    appWindow.overlay.setPointerEvents(allowed)
}

export const updateOverlayCursor = (cursor: string) => {
    appWindow.overlay.webContents.send('update-cursor', cursor)
}

export const showSuggestionBox = () => {
    appWindow.overlay.webContents.send('activate-suggestionbox')
}

export const hideSuggestionBox = () => {
    appWindow.overlay.webContents.send('disable-suggestionbox')
}

export const setSuggestionBoxWidth = (width: string) => {
    appWindow.overlay.webContents.send('width-suggestionbox', width)
}

export const setSuggestionBoxLeft = (width: string) => {
    appWindow.overlay.webContents.send('left-suggestionbox', width)
}

export const showMenu = () => {
    appWindow.overlay.webContents.send('activate-menu')
}

export const hideMenu = () => {
    appWindow.overlay.webContents.send('disable-menu')
}

export const setMenuLeft = (left: string) => {
    appWindow.overlay.webContents.send('left-menu', left)
}