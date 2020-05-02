import { ipcRenderer } from "electron";

import { ViewCreateOptions } from "../../../interfaces/view";
import { Tab } from "../mixins/tab";

import { observable } from 'mobx';

export class TabsStore {
    @observable
    public list: Tab[] = []

    constructor() {
        ipcRenderer.on('view-created', (e, params) => {
            const tab = new Tab(params);

            this.list.push(tab);

            console.log(tab, this)
        })
    }

    add(options: ViewCreateOptions) {
        // ipcRenderer.send('view-create', options);

        // const tab = new Tab({ id: view.id, url: view.url });

        // this.list.push(tab);
    }
}