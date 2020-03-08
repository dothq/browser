import { observable } from "mobx";
import { ipcRenderer } from 'electron';

class Store {

    public constructor() {
        ipcRenderer.on('visible', (e, flag) => {
            this.visible = flag;
        });

        ipcRenderer.on('content', (e, action, content) => {
            this.content.shift()

            if(!content || content.length == 0) {
                content = " ";
            }

            this.content.push({
                content,
                action
            });
        })
    }

    @observable
    public visible: boolean = false;

    @observable
    public content: any = [];

    @observable
    public sender: string;

    public hide() {
        this.visible = false;
        setTimeout(() => {
            ipcRenderer.send('hide-dialog', 'alert');
            this.content.shift();
        }, 100);
    }
}

export default new Store()