import { ipcRenderer } from "electron";
import { ViewCreateOptions } from "../../../interfaces/view";

export class Tab {
    public id: string;
    public url: string;
    public title: string;
    public status: 'loading' | 'idle' | 'crashed' | 'suspended';

    constructor({ id, url, active }: ViewCreateOptions) {
        console.log(id, url, active)

        this.id = id;
        this.url = url;

        ipcRenderer.send('view-create', { id, url, active })
    }

    public refresh() {
        ipcRenderer.send('view-refresh', this.id);
    }
}