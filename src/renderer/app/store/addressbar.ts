import { observable, computed } from "mobx";
import { CLEAN_URL_REGEX, REMOVE_TRAILING_SLASH_REGEX } from "../../constants/url";
import { NEWTAB_URL } from "../../constants/web";
import { parse } from "url";

export class AddressbarStore {
    public store;

    @observable
    public rawValue: string;

    @observable
    public isEditing: boolean = false;

    @computed
    public get value(): string {
        if(this.isEditing) return this.rawValue;

        const tab = this.store.tabs && this.store.tabs.selectedTab;
        if(!tab) return ""

        let url = tab.url;

        if(url == NEWTAB_URL) return "";

        url = url.replace(CLEAN_URL_REGEX, "");
        url = url.replace(REMOVE_TRAILING_SLASH_REGEX, "");

        return url
    }

    public urlParts(url) {
        const parsed = parse(url);

        const parts = [
            {
                value: parsed.host,
                isGray: false
            },
            {
                value: parsed.pathname,
                isGray: true
            }
        ]

        return parts
    }

    constructor(store) {
        this.store = store;
    }
}