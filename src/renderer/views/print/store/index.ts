import { observable } from "mobx";
import { ipcRenderer } from 'electron';

class Store {

    public constructor() {
        ipcRenderer.on('visible', (e, flag) => {
            this.visible = flag;
        });

        // window.addEventListener('blur', () => {
        //     this.hide()
        // })
    }

    @observable
    public visible: boolean = false;

    @observable
    public settings = {
        pages: 0
    };

    public hide() {
        this.visible = false;
        setTimeout(() => {
            ipcRenderer.send('hide-dialog', 'print');
        }, 100);
    }
}

export default new Store()