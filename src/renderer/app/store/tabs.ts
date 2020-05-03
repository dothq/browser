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

        const tab = new Tab(options);

        this.list.push(tab);

        this.selectedId = tab.id;

        this.store.searchRef.current.focus()
        this.store.searchRef.current.select()
    }

    @action
    public close(id: string) {
        const index = this.list.findIndex(tab => tab.id == id)

        if(this.list.length == 1) return ipcRenderer.send('app-close')
        
        let replacingIndex;

        if(index - 1 !== -1) replacingIndex = index - 1;
        if(index + 1 <= this.list.length - 1) replacingIndex = index + 1;

        if(replacingIndex == undefined) return;

        const replacingId = this.list[replacingIndex].id;

        ipcRenderer.send('view-destroy', id, replacingId)

        this.selectedId = replacingId;
        this.list = this.list.filter(tab => tab.id !== id);

        // this.list[index].isClosing = true;

        // setTimeout(() => {
        //     this.list[index].isClosing = false;
        //     this.list = this.list.filter(tab => tab.id !== id);
        // }, 2000);
        // // else return ipcRenderer.send('app-close')
    }
}