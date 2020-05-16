import { ipcRenderer } from "electron";

import { ViewCreateOptions } from "../../../interfaces/view";
import { Tab } from "../models/tab";

import { observable, computed, action } from 'mobx';
import { v4 as uuidv4 } from 'uuid';
import { NEWTAB_URL } from "../../constants/web";

export class TabsStore {
    public store;

    @observable
    public list: Tab[] = []

    @observable
    public selectedId: string;

    @observable
    public lastInteractedViews: string[] = [];

    @computed
    public get selectedTab() {
        return this.list.find(tab => tab.id == this.selectedId)
    }

    constructor(store) {
        this.store = store;
        
        ipcRenderer.on('add-tab', (e, options: ViewCreateOptions) => this.add(options))
    }

    @action
    public getTabById(id: string) {
        return this.list.find(tab => tab.id == id);
    } 

    @action
    public add(options: ViewCreateOptions) {
        this.lastInteractedViews.push(this.selectedId);

        options.id = uuidv4();

        const tab = new Tab(options);

        this.list.push(tab);

        if(options.active) this.selectedId = tab.id;

        if(options.url == NEWTAB_URL) {
            this.store.searchRef.current.focus()
            this.store.searchRef.current.select()
        }
    }

    @action
    public close(id: string) {
        ipcRenderer.send('view-destroy', id)
        if(this.list.length == 1) return ipcRenderer.send('app-close')
    }

    @action
    public select(id: string) {
        this.lastInteractedViews.push(this.selectedId);
        this.lastInteractedViews.shift();

        if(id !== this.selectedId) {
            ipcRenderer.send('view-select', id);
            this.selectedId = id;
        }
    }
}