import React from "react";

import { TabsStore } from "./tabs";
import { AddressbarStore } from "./addressbar";
import { EventsStore } from "./events";

import { observable } from 'mobx';
import { ConnectivityStore } from "./connectivity";
import { ipcRenderer } from "electron";
import { NEWTAB_URL } from "../../constants/web";
import { NAVIGATION_HEIGHT } from "../../constants/window";
import { ThemesStore } from "./themes";

class Dot {
    public tabs = new TabsStore(this);
    public addressbar = new AddressbarStore(this);
    public connectivity = new ConnectivityStore(this);
    public themes = new ThemesStore(this);
    public events = new EventsStore(this);

    @observable
    public db = {
        settings: [],
        history: [],
        bookmarks: [],
    };

    @observable
    public dbReady: boolean = false;

    @observable
    public fullscreen: boolean = false;

    @observable
    public maximised: boolean = false;

    @observable
    public debugMode: boolean = false;

    @observable
    public isOnline: boolean = true;

    @observable
    public searchRef = React.createRef<HTMLInputElement>()

    @observable
    public menuButtonRef = React.createRef<HTMLDivElement>();

    constructor() {
        window.addEventListener('DOMContentLoaded', () => {
            this.tabs.add({ url: NEWTAB_URL, active: true })

            this.connectivity.checkForConnection().then((r: any) => {
                if(r.connected == -1 || r.connected == 1) this.isOnline = true;
                if(r.connected == 0) this.isOnline = false;
            })
            ipcRenderer.send('suggestionbox-width', `${this.searchRef.current.getBoundingClientRect().width}`);
            ipcRenderer.send('suggestionbox-left', `${this.searchRef.current.getBoundingClientRect().left}`);

            ipcRenderer.send('menu-left', `${this.menuButtonRef.current.getBoundingClientRect().left}`);
        })

        ipcRenderer.on('focus-addressbar', () => {

        })

        ipcRenderer.on('fullscreen', (e, isFullscreen) => {
            this.fullscreen = isFullscreen;
        })

        ipcRenderer.on('maximised', (e, isMaximised) => {
            this.maximised = isMaximised;
        })

        ipcRenderer.on('storage-import', async () => {
            const t = Date.now()

            const imported = await ipcRenderer.invoke('db-import')

            for (const data of imported) {
                const { collection, documents } = data;  

                if(this.db[collection].length == 0) {
                    this.db[collection] = documents;
                    this.sendDbDebug("IMPORT", collection, documents, t)
                }
            }
        })

        ipcRenderer.on('storage-update', (e, payload) => {
            const { collection, op, data, t } = payload;

            this.db[collection].push(data)

            this.sendDbDebug(op, collection, data, t)
        })
    }

    public get navigationHeight() {
        return (NAVIGATION_HEIGHT + 0)
        // return (NAVIGATION_HEIGHT + (this.dbReady ? this.db.settings.appearance.showBookmarksBar ? 32 : 0 : 0))
    }

    public get theme() {
        return ""
    }

    public sendDbDebug(op, collection, data, t) {
        console.log(`storage.${collection} => ${op}(${Date.now() - t}ms)`, data)
    }
}

export default new Dot();