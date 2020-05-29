import { observable, computed } from "mobx";

import { 
    CLEAN_URL_REGEX, 
    REMOVE_TRAILING_SLASH_REGEX,
} from "../../constants/url";
import { NEWTAB_URL, EXPO_PREFIX, EXPO_SUFFIX } from "../../constants/web";

import { parse } from "url";
import { v4 as uuidv4 } from 'uuid';

export class AddressbarStore {
    public store;

    @observable
    public rawValue: string = "aaa";

    @observable
    public isEditing: boolean = false;

    @observable
    public isNTP: boolean = false;

    @computed
    public get value(): string {
        const tab = this.store.tabs && this.store.tabs.selectedTab;
        if(!tab) return ""
        if(this.isEditing) return this.rawValue;

        let url = tab.url;

        url = url.replace(CLEAN_URL_REGEX, "");
        url = url.replace(REMOVE_TRAILING_SLASH_REGEX, "");

        return url
    }

    public urlParts(url) {
        if(!url) return [];
        if(url == NEWTAB_URL) return [];

        const parsed = parse(url);

        if(/\/+$/gm.test(url)) {
            parsed.path = ""
        }
        
        if(/^(?:https?:\/\/)?(?:www\.)?/i.test(url)) {
            parsed.host = parsed.host.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
        }

        console.log(parsed)

        const parts = [
            {
                id: uuidv4(),
                value: parsed.protocol + "//",
                opacity: 0.5,
                hide: parsed.protocol.startsWith("http")
            },
            {
                id: uuidv4(),
                value: parsed.hostname,
                opacity: 1
            },
            {
                id: uuidv4(),
                value: ":" + parsed.port,
                opacity: 0.5,
                hide: parsed.port == null
            },
            {
                id: uuidv4(),
                value: parsed.pathname,
                opacity: 0.5,
                hide: parsed.pathname == "/"
            },
            {
                id: uuidv4(),
                value: parsed.hash,
                opacity: !parsed.hash ? 0 : 0.5
            },
        ]

        return parts
    }

    public inputValue() {
        if(this.store.tabs && !this.store.tabs.selectedTab) return;
        if(!this.store.tabs.selectedTab.inputFocused) return;
        if(this.store.tabs.selectedTab.url == NEWTAB_URL) return;

        return this.isEditing ? this.value : this.store.tabs.selectedTab.url;
    }

    constructor(store) {
        this.store = store;
    }
}