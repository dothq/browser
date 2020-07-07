import { ipcRenderer } from "electron";

export class ThemesStore {
    public store;

    public getTheme() {
        console.log(this.store.db)
    }

    constructor(store) {
        this.store = store;
    }
}