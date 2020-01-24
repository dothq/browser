import { observable } from "mobx";
import { ipcRenderer } from 'electron';
import { getHostname } from '~/shared/utils/url';

interface PermissionRequest {
    url: string;
    name: string;
    time: number;
}

const defaultPermissionRequest = {
    url: '',
    name: 'geolocation',
    time: Date.now()
}

class Store {

    public constructor() {
        ipcRenderer.on('visible', (e, flag) => {
            this.visible = flag;
        });

        ipcRenderer.on('request-permission', (e, content) => {
            content.url = getHostname(content.url)

            console.log(content)

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
        }, 100);
    }

    public resolveRequest(r: boolean) {
        ipcRenderer.send('request-permission-result', r, this.content[0]);
    }
}

export default new Store()