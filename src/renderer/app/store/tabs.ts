import { ipcRenderer } from "electron";

import { ViewCreateOptions } from "../../../interfaces/view";
import { Tab } from "../mixins/tab";

import { observable, computed, action } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

export class TabsStore {
    public store;

    @observable
    public list: Tab[] = []

    @observable
    public selectedId: string;

    @computed
    public get selectedTab() {
        return this.list.find(tab => tab.id == this.selectedId)
    }

    constructor(store) {
        this.store = store;
    }

    @action
    public getTabById(id: string) {
        return this.list.find(tab => tab.id == id);
    } 

    @action
    public add(options: ViewCreateOptions) {
        options.id = uuidv4();

        console.log("pre", options)

        const tab = new Tab(options);

        console.log("pro", { id: tab.id, url: tab.url })

        this.list.push(tab);

        this.selectedId = tab.id;

        this.store.searchRef.current.focus()
        this.store.searchRef.current.select()
    }

    @action
    public close(id: string) {
        const index = this.list.findIndex(tab => tab.id == id)

        this.list = this.list.filter(tab => tab.id !== id);

        const previousId = this.list[index - 1].id;

        ipcRenderer.send('view-destroy', id, previousId)

        this.selectedId = previousId;
        // else return ipcRenderer.send('app-close')
    }
}