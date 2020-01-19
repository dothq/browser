import { observable } from "mobx";
import { ipcRenderer } from 'electron';
import { getHostname } from '~/shared/utils/url';

interface PermissionRequest {
    url: string;
    permission: string;
    time: number;
}

const defaultPermissionRequest = {
    url: '',
    permission: '',
    time: Date.now()
}

class Store {

    public constructor() {
        ipcRenderer.on('visible', (e, flag) => {
            this.visible = flag;
        });

        ipcRenderer.on('request-permission', (e, content) => {
            content.url = getHostname(content.url)

            this.content.push(content)
            this.content.shift()
        })
    }

    @observable
    public visible: boolean = false;

    @observable
    public content: PermissionRequest[] = [defaultPermissionRequest]

    public hide() {
        this.visible = false;
        setTimeout(() => {
            ipcRenderer.send('hide-dialog', 'alert');
            this.content.shift();
        }, 100);
    }
}

export default new Store()