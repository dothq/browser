import { observable } from "mobx";
import { ipcRenderer, PrinterInfo } from 'electron';

class Store {

    public constructor() {
        ipcRenderer.on('visible', (e, flag) => {
            this.visible = flag;
        });

        ipcRenderer.on('update-printers', (e, printers) => {
            this.printers = printers;
        });

        ipcRenderer.on('update-page-preview', (e, image) => {
            this.preview = image;
        });

        // window.addEventListener('blur', () => {
        //     this.hide()
        // })
    }

    @observable
    public visible: boolean = false;

    @observable
    public printers: PrinterInfo[] = [];

    @observable
    public preview: string = '';

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