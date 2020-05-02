import React from "react";

import { TabsStore } from "./tabs";

import { observable } from 'mobx';
import { ipcRenderer } from "electron";

class Dot {
    public tabs = new TabsStore(this);

    @observable
    public isMaximised: boolean = false;

    @observable
    public debugMode: boolean = false;

    public searchRef = React.createRef<HTMLInputElement>()

    constructor() {
        window.addEventListener('DOMContentLoaded', () => {
            this.tabs.add({ url: "https://web.tabliss.io/", active: true })
        })
    }
}

export default new Dot();