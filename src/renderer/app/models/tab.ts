import { ipcRenderer } from "electron";
import { ViewCreateOptions } from "../../../interfaces/view";
import { observable } from "mobx";

export class Tab {
    @observable
    public id: string;

    @observable
    public url: string;

    @observable
    public title: string;

    @observable
    public status: 'loading' | 'idle' | 'crashed' | 'suspended';

    @observable
    public isClosing: boolean = false;

    constructor({ id, url, active }: ViewCreateOptions) {
        this.id = id;
        this.url = url;

        ipcRenderer.send('view-create', { id, url, active })

        ipcRenderer.on(`view-data-updated-${this.id}`, (event, data) => {
            for (const [key, value] of Object.entries(data)) {
                console.log(key, value)
                this[key] = data[key]
            }

            console.log(data, this)
        })
    }

    public refresh() {
        ipcRenderer.send('view-refresh', this.id);
    }
}