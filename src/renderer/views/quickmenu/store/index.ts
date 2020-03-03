import { observable } from "mobx";
import { ipcRenderer } from 'electron';

class Store {

    public constructor() {
        ipcRenderer.on('visible', (e, flag, tabId, url) => {
            this.visible = flag;
            this.tabId = tabId;
            this.url = url;
        });

        ipcRenderer.on('update-navigation-flags', (e, flags) => {
            this.navigationState = flags;
        });

        window.addEventListener('blur', () => {
            this.hide()
        })
    }

    @observable
    public visible: boolean = false;

    @observable
    public tabId: number = 1;

    @observable
    public url: string = 'about:blank';

    @observable
    public navigationState = {
        back: false,
        forward: false
    }

    public hide() {
        this.visible = false;
        setTimeout(() => {
            ipcRenderer.send('hide-dialog', 'quickMenu');
        }, 50);
    }
}

export default new Store()