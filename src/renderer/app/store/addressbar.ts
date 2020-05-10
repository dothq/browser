import { observable, computed } from "mobx";
import { CLEAN_URL_REGEX, REMOVE_TRAILING_SLASH_REGEX } from "../../constants/url";
import { NEWTAB_URL } from "../../constants/web";
import { parse } from "url";
import { v4 as uuidv4 } from 'uuid';

export class AddressbarStore {
    public store;

    @observable
    public rawValue: string = "";

    @observable
    public isEditing: boolean = false;

    @computed
    public get value(): string {
        // if(this.isEditing) return this.rawValue;

        const tab = this.store.tabs && this.store.tabs.selectedTab;
        // if(!tab) return ""

        let url = tab.url;

        url = url.replace(CLEAN_URL_REGEX, "");
        url = url.replace(REMOVE_TRAILING_SLASH_REGEX, "");

        console.log(url)

        return url
    }

    public urlParts(url) {
        if(!url) return [];
        if(url == NEWTAB_URL) return [{ id: uuidv4(), value: "Search Google or type a URL", opacity: 0.8 }];

        const parsed = parse(url);

        if(/\/+$/gm.test(url)) {
            parsed.path = ""
        }
        
        if(/^(?:https?:\/\/)?(?:www\.)?/i.test(url)) {
            parsed.host = parsed.host.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
        }

        const parts = [
            {
                id: uuidv4(),
                value: parsed.host,
                opacity: 1
            },
            {
                id: uuidv4(),
                value: parsed.path,
                opacity: 0.5
            }
        ]

        return parts
    }

    public inputValue() {
        if(this.store.tabs && !this.store.tabs.selectedTab) return ""
        if(this.store.tabs && this.store.tabs.selectedTab && !this.store.tabs.selectedTab.inputFocused) return ""
        if(this.store.tabs.selectedTab.url == NEWTAB_URL) return ""

        return this.isEditing == true ? this.value : this.store.tabs.selectedTab.url;
    }

    constructor(store) {
        this.store = store;
    }
}