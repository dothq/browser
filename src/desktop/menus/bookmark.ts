import { Menu, MenuItem } from "electron";
import { appWindow } from "..";

export const showBookmarkMenu = (bookmark, x, y) => {
    const menu = Menu.buildFromTemplate([
        {
            label: "Open in new tab",
            click: () => {
                appWindow.window.webContents.send('add-tab', { url: bookmark.url, active: false })
            }
        },
        {
            type: ("separator" as any)
        },
        {
            label: "Delete",
            click: () => {
                appWindow.storage.db.bookmarks.remove({ _id: bookmark.bookmarkId })

                appWindow.window.webContents.send('refetch-storage', true)

                appWindow.selectedView.rearrange()
            }
        },
        {
            type: ("separator" as any)
        },
        {
            label: "Bookmark manager",
            click: () => {
                
            }
        },
        {
            label: "Show bookmarks bar",
            type: ("checkbox" as any),
            checked: appWindow.storage.db.settings.getAllData()[0].appearance.showBookmarksBar,
            click: () => {
                const currentValue = appWindow.storage.db.settings.getAllData()[0].appearance.showBookmarksBar

                appWindow.storage.db.settings.update({ "appearance.showBookmarksBar": currentValue }, { $set: { "appearance.showBookmarksBar": !currentValue } }, { multi: true })
            
                appWindow.storage.db.settings.getAllData()[0].appearance

                appWindow.window.webContents.send('refetch-storage', true)

                appWindow.selectedView.rearrange()
            }
        },
    ])

    menu.popup({ x, y })
}