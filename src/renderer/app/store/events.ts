import { NAKED_DOMAIN_REGEX, PROTOCOL_REGEX } from "../../constants/url";
import { ipcRenderer } from "electron";

export class EventsStore {
    public store;

    public inputOnKeyUp(event) {
        if(event.keyCode == 13) {
            let url = this.store.searchRef.current.value;
            let text = url;

            if(url.match(NAKED_DOMAIN_REGEX) && url.includes(".")) {
                url = "http://" + text;
            } else if(!url.match(PROTOCOL_REGEX)) {
                url = `https://startpage.com/sp/search?query=${encodeURIComponent(text)}`
            }

            this.inputNavigate(url);
        }
    }

    public inputOnMouseDown() {
        this.store.addressbar.isEditing = true;
        this.store.addressbar.rawValue = this.store.tabs.selectedTab.url;

        if(this.store.searchRef.current.value.length == 0 && this.store.tabs.selectedTab.inputFocused == false) {
            this.store.tabs.selectedTab.inputFocused = !this.store.tabs.selectedTab.inputFocused
        }
    }

    public inputOnClick() {
        this.store.searchRef.current.focus();
        this.store.searchRef.current.select();
    }

    public inputOnChange(event) {
        this.store.addressbar.rawValue = event.target.value;
    }

    public inputOnBlur() {
        window.getSelection().removeAllRanges()

        this.store.tabs.selectedTab.inputFocused = false;
        this.store.addressbar.isEditing = false;

        this.store.searchRef.current.value = "";

        if(this.store.searchRef.current.value.length == 0) {
            this.store.searchRef.current.blur()
            this.store.tabs.selectedTab.showInputPlaceholder = true;
        }
    }

    public inputOnInput() {
        if(this.store.searchRef.current.value.length !== 0) {
            this.store.tabs.selectedTab.showInputPlaceholder = false;
        } else {
            this.store.tabs.selectedTab.showInputPlaceholder = true;
        }
    }

    public inputNavigate(url) {
        const { id } = this.store.tabs.selectedTab;

        this.store.addressbar.isEditing = false;
        this.store.tabs.selectedTab.url = url;

        ipcRenderer.send('view-navigate', id, url)

        this.store.searchRef.current.value = "";
        this.store.searchRef.current.blur();
    } 

    constructor(store) {
        this.store = store;
    }
}