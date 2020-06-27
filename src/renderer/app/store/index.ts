import React from "react";

import { TabsStore } from "./tabs";
import { AddressbarStore } from "./addressbar";
import { EventsStore } from "./events";

import { observable } from 'mobx';
import { ConnectivityStore } from "./connectivity";
import { ipcRenderer } from "electron";
import { NEWTAB_URL } from "../../constants/web";

class Dot {
    public tabs = new TabsStore(this);
    public addressbar = new AddressbarStore(this);
    public connectivity = new ConnectivityStore(this);
    public events = new EventsStore(this);

    @observable
    public db;

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
            // @todo Make fake addressbar focus real addressbar
        })

        ipcRenderer.on('fullscreen', (e, isFullscreen) => {
            this.fullscreen = isFullscreen;
        })

        ipcRenderer.on('maximised', (e, isMaximised) => {
            this.maximised = isMaximised;
        })

        ipcRenderer.on('refetch-storage', (e) => {
            this.fetchStorage()
        })
    }

    private async fetchStorage() {
        const storage = await ipcRenderer.invoke('get-storage')

        this.db = storage;

        console.log("settings => refetched settings")
    }
}

export default new Dot();