import { ipcRenderer } from 'electron';
import { observable } from 'mobx';

export class Store {
  @observable
  public visible = true;

  @observable
  public url: string = '';

  public constructor() {
    ipcRenderer.on('visible', (e, flag) => {
      this.visible = flag;
    });
  }

  public hide() {
    setTimeout(() => {
      this.visible = false;
      ipcRenderer.send('hide-dialog', 'location');
    }, 1000);
  }
}

export default new Store();
