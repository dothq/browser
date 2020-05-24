import { ipcRenderer } from "electron";
import { ViewCreateOptions } from "../../../interfaces/view";
import { observable } from "mobx";
import { BLUE_1 } from "../../constants/colors";
import { NEWTAB_URL } from "../../constants/web";

export class Tab {
    @observable
    public id: string;

    @observable
    public url: string;

    @observable
    public title: string = "New Tab";

    @observable
    public status: 'loading' | 'idle' | 'crashed' | 'suspended' = 'loading';

    @observable
    public favicon: string;

    @observable
    public themeColor: string = BLUE_1;
    
    @observable
    public navigationStatus: { canGoForward: boolean, canGoBack: boolean };

    @observable
    public visible: boolean = true;

    @observable
    public killed: boolean = false;

    @observable
    public inputFocused: boolean = false;

    @observable
    public showInputPlaceholder: boolean = true;

    constructor({ id, url, active }: ViewCreateOptions) {
        this.id = id;
        this.url = url;

        console.log("tab =>", this)

        ipcRenderer.send('view-create', { id, url, active })

        ipcRenderer.on(`view-data-updated-${this.id}`, (event, data) => {
            for (const [key, value] of Object.entries(data)) {
                console.log(`tab.${key}`, "=>", data[key])
                this[key] = data[key]
            }
        })
    }

    public get isNTP() {
        return this.url == NEWTAB_URL
    }

    public refresh() {
        ipcRenderer.send('view-refresh', this.id);
    }

    public stop() {
        ipcRenderer.send('view-stop', this.id);
    }

    public goBack() {
        ipcRenderer.send('view-back', this.id);
    }

    public goForward() {
        ipcRenderer.send('view-forward', this.id);
    }
}