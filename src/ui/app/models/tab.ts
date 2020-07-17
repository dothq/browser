import { ipcRenderer } from "electron";
import { ViewCreateOptions } from "../../../desktop/interfaces/view";
import { observable } from "mobx";
import { BLUE_1 } from "@dothq/colors";
import { NEWTAB_URL } from "../../constants/web";

const DataTypes = [
    'id', 
    'url', 
    'title', 
    'status', 
    'favicon', 
    'themeColor', 
    'navigationStatus', 
    'error', 
    'blockedAds', 
    'isBookmarked', 
    'isPinned',
    'mediaState'
]

export class Tab {
    @observable
    public id: string;

    @observable
    public originalUrl: string;

    @observable
    public title: string = "";

    @observable
    public status: 'loading' | 'idle' | 'crashed' | 'suspended' = 'loading';

    @observable
    public favicon: { favicon: string, isCached: boolean } = { favicon: null, isCached: false };

    @observable
    public themeColor: string = BLUE_1;
    
    @observable
    public navigationStatus: { canGoForward: boolean, canGoBack: boolean } = { canGoForward: false, canGoBack: false };

    @observable
    public blockedAds: number = 0;

    @observable
    public isBookmarked: boolean = false;

    @observable
    public isPinned: boolean = false;

    @observable
    public mediaState: 'playing' | 'paused' | 'muted' | null;

    @observable
    public visible: boolean = true;

    @observable
    public killed: boolean = false;

    @observable
    public error: any;

    @observable
    public inputFocused: boolean = false;

    @observable
    public showInputPlaceholder: boolean = true;

    constructor({ id, url, active }: ViewCreateOptions) {
        this.id = id;
        this.originalUrl = url;

        if(process.env.ENV && process.env.ENV == "development") console.log("tab =>", this)

        ipcRenderer.send('view-create', { id, url, active })

        DataTypes.forEach(dataType => {
            ipcRenderer.on(`view-${dataType}-updated-${this.id}`, (event, data) => {
                if(dataType == "url") {
                    dataType = "originalUrl"
                }

                this[dataType] = data
                if(dataType == "favicon" || (process.env.ENV && process.env.ENV !== "development")) return;
                console.log(`tab.${dataType} =>`, data);
            })
        })

        ipcRenderer.on(`blocked-ad-${this.id}`, () => {
            ++this.blockedAds
        })

        ipcRenderer.on(`tab-bookmark-${this.id}`, () => this.bookmark())
    }

    public get isNTP() {
        return this.url == NEWTAB_URL
    }

    public goto(url) {
        ipcRenderer.send('view-navigate', this.id, url);
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

    public bookmark() {
        this.isBookmarked = !this.isBookmarked;

        ipcRenderer.send('view-bookmark', this.id);
    }

    public get url() {
        if(this.error && this.error.validatedURL) return this.error.validatedURL
        return this.originalUrl;
    }

    public set url(url) {
        this.originalUrl = url;
    }

    public get isError() {
        return this.error && this.error.validatedURL;
    }
}