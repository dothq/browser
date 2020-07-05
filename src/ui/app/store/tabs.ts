import { ipcRenderer } from "electron";

import { ViewCreateOptions } from "../../../desktop/interfaces/view";
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

    @computed
    public get selectedTab() {
        return this.list.find(tab => tab.id == this.selectedId)
    }

    constructor(store) {
        this.store = store;
        
        ipcRenderer.on('add-tab', (e, options: ViewCreateOptions) => this.add(options))
        ipcRenderer.on('close-tab', (e, id: string) => {
            const tab = this.getTabById(id)

            tab.visible = !tab.visible

            this.close(tab.id);
    
            setTimeout(() => {
                tab.killed = true
            }, 200);
        })
    }

    @action
    public getTabById(id: string) {
        return this.list.find(tab => tab.id == id);
    } 

    @action
    public add(options: ViewCreateOptions) {
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
        const currentIndex = this.list.findIndex(tab => tab.id == this.selectedId)
        const index = this.list.findIndex(tab => tab.id == id)

        this.list.splice(index, 1)

        if(this.list.length == 0) return ipcRenderer.send('app-close')

        ipcRenderer.send('view-destroy', id)

        this.selectedId = this.list[!this.list[currentIndex-1] && this.list[currentIndex] ? currentIndex : currentIndex-1].id;

        ipcRenderer.send('view-select', this.selectedId);
    }

    @action
    public select(id: string) {
        if(id !== this.selectedId) {
            ipcRenderer.send('view-select', id);
            this.selectedId = id;
        }
    }
}