import { EventEmitter } from 'events';
import { WindowsManager } from '../windows-manager';
import { requestURL } from '~/renderer/views/app/utils/network';
import { EDGE_SERVER_HOST } from '../../constants';

export class Versions extends EventEmitter {
    private loaded = false;

    public chromium: string = "79.0.3945.130";
    public browser: string = "0.0.0";
    public node: string = "0.0.0";

    private onLoad = async (): Promise<void> => {
        return new Promise(resolve => {
          if (!this.loaded) {
            this.once('load', () => {
              resolve();
            });
          } else {
            resolve();
          }
        });
    };

    constructor(manager: WindowsManager) {
        super();

        this.load()
    }

    private async load() {
        const res = await requestURL(`${EDGE_SERVER_HOST}/versions/latest`);

        const { chromium, browser, node } = JSON.parse(res.data)

        this.chromium = chromium;
        this.browser = browser;
        this.node = node;

        this.loaded = true;
        this.emit('load');
    }
    

}