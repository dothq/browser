import { TabsStore } from "./tabs";

import { observable } from 'mobx';
import { ipcRenderer } from "electron";

class Dot {
    public tabs = new TabsStore();

    @observable
    public isMaximised: boolean = false;

    constructor() {
        ipcRenderer.on('app-display-changed', (e, isMaximised) => {
            this.isMaximised = isMaximised;
        })
    }
}

export default new Dot();