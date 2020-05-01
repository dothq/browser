import { IpcMainEvent } from "electron"
import { ViewCreateOptions } from "../../interfaces/view"
import { View } from "../view"
import { appWindow } from ".."

export const onViewCreate = (e: IpcMainEvent, options: ViewCreateOptions) => {
    const view = new View(options.id, options.url)

    appWindow.views.push(view)

    e.returnValue = view;
}