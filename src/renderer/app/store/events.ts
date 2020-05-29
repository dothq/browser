import { NAKED_DOMAIN_REGEX, PROTOCOL_REGEX } from "../../constants/url";
import { ipcRenderer, remote } from "electron";
import { Tab as ITab } from "../models/tab"
import { SEARCH_ENGINE_URL, EXPO_URL } from "../../constants/web";
import dot from '.'

export class EventsStore {
    public store;

    public inputOnKeyUp(event) {
        if(event.keyCode == 13) {
            let url = this.store.searchRef.current.value;
            let text = url;

            if(url.match(NAKED_DOMAIN_REGEX) && url.includes(".")) {
                url = "http://" + text;
            } else if(!url.match(PROTOCOL_REGEX)) {
                url = `${SEARCH_ENGINE_URL}${encodeURIComponent(text)}`
            } else if(process.env.ENV == "development" && url.startsWith("dot://")) {
                url = `${EXPO_URL}${url.split("dot://")[1]}`
            }

            this.inputNavigate(url);
            ipcRenderer.send('suggestionbox-disable');
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
        ipcRenderer.send('suggestionbox-activate');
    }

    public inputNavigate(url) {
        const { id } = this.store.tabs.selectedTab;

        this.store.addressbar.isEditing = false;
        this.store.tabs.selectedTab.url = url;

        ipcRenderer.send('view-navigate', id, url)

        this.store.searchRef.current.value = "";
        this.store.searchRef.current.blur();
    }

    public navigationOnRefreshClick() {
        const tab = this.store.tabs.selectedTab;
        if(tab.status == "loading") this.store.tabs.selectedTab.stop()
        else this.store.tabs.selectedTab.refresh()
    }

    public navigationOnBackClick() {
        this.store.tabs.selectedTab.goBack()
    }

    public navigationOnForwardClick() {
        this.store.tabs.selectedTab.goForward()
    }

    public tabOnMouseDown(tab: ITab) {
        this.store.tabs.select(tab.id);
        this.store.tabs.selectedTab.inputFocused = false;
    }

    public windowsOnClick(type: string) {
        const window = remote.getCurrentWindow()

        if(type == "close") {
            window.close()
        } else if(type == "minimise") {
            window.minimize()
        } else if(type == "maximise") {
            if(window.isMaximized()) return window.unmaximize()
            window.maximize()
            ipcRenderer.send('suggestionbox-width', `${dot.searchRef.current.getBoundingClientRect().width}`);
            ipcRenderer.send('suggestionbox-left', `${dot.searchRef.current.getBoundingClientRect().left}`);
        }
    }

    constructor(store) {
        this.store = store;
    }
}