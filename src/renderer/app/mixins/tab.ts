import { ipcRenderer } from "electron";
import { ViewCreateOptions } from "../../../interfaces/view";
import { observable } from "mobx";

export class Tab {
    public id: string;
    public url: string;
    public title: string;
    public status: 'loading' | 'idle' | 'crashed' | 'suspended';

    @observable
    public isClosing: boolean = false;

    constructor({ id, url, active }: ViewCreateOptions) {
        this.id = id;
        this.url = url;

        ipcRenderer.send('view-create', { id, url, active })
    }

    public refresh() {
        ipcRenderer.send('view-refresh', this.id);
    }
}