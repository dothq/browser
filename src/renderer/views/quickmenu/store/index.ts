import { observable } from "mobx";
import { ipcRenderer } from 'electron';

class Store {

    public constructor() {
        ipcRenderer.on('visible', (e, flag, tabId) => {
            this.visible = flag;
            this.tabId = tabId;
            console.log("visible", flag)
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