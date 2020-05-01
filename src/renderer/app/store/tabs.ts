import { ipcRenderer } from "electron";

import { ViewCreateOptions } from "../../../interfaces/view";
import { Tab } from "../mixins/tab";

import { observable } from 'mobx';

export class TabsStore {
    @observable
    public list: Tab[] = []

    add(options: ViewCreateOptions) {
        // ipcRenderer.send('view-create', options);

        // const tab = new Tab({ id: view.id, url: view.url });

        // this.list.push(tab);
    }
}