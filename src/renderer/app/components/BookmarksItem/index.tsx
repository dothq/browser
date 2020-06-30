import React from "react";

import { observer } from "mobx-react";
import { ipcRenderer } from "electron";

import { StyledBookmarksItem, BookmarksIcon, BookmarksTitle } from "./style";

import dot from '../../store'

export const BookmarksItem = observer(({ url, title, favicon, bookmarkId }: { url: string; title?: string; favicon: string; bookmarkId: string }) => {
    const tab = dot.tabs.selectedTab

    const onBookmarksItemMouseUp = (e, url) => {
        if(e.button == 0) return tab.goto(url) // Primary click
        if(e.button == 1) return dot.tabs.add({ url, active: false }) // Middle click
        if(e.button == 2) return ipcRenderer.send('bookmark-menu-popup', { bookmark: { bookmarkId, url, title, favicon }, x: e.clientX, y: e.clientY })
    }

    return (
        <StyledBookmarksItem 
            onMouseUp={(e) => onBookmarksItemMouseUp(e, url)}
            title={`${title || ''}${title ? '\n' : ''}${url || ''}`}
        >
            <BookmarksIcon icon={favicon} />
            {title && title.length > 0 && <BookmarksTitle>{title}</BookmarksTitle>}
        </StyledBookmarksItem>
    )
})