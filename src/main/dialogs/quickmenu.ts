import { AppWindow } from '../app-window';
import { Dialog } from './dialog';
import { Rectangle } from 'electron';

const WIDTH = 300;
const HEIGHT = 350;

export class QuickMenuDialog extends Dialog {
  public visible = false;

  constructor(appWindow: AppWindow) {
    super(appWindow, {
      name: 'quickmenu',
      bounds: {
        width: WIDTH,
        height: HEIGHT,
        y: 0,
      },
      devtools: true
    });
  }

  public setPos(x: number, y: number) {

    console.log("rect", x, y)

    super.rearrange({ x, y });
  }

  public show(tabId: number) {
    super.show();
    this.webContents.send('visible', true, tabId);
    this.visible = true;
  }

  public hide() {
    super.hide();
    this.webContents.send('visible', false);
    this.visible = false;
  }
}