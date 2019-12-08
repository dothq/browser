import { AppWindow } from '../app-window';
import { Dialog } from './dialog';

const WIDTH = 330;
const HEIGHT = 550;

export class MenuDialog extends Dialog {
  public visible = false;

  constructor(appWindow: AppWindow) {
    super(appWindow, {
      name: 'menu',
      bounds: {
        width: WIDTH,
        height: HEIGHT,
        y: 36,
      },
      devtools: false
    });
  }

  public rearrange() {
    const { width } = this.appWindow.getContentBounds();
    super.rearrange({ x: width - WIDTH });
  }

  public show() {
    super.show();
    this.webContents.send('visible', true);
    this.visible = true;
  }

  public hide() {
    super.hide();
    this.webContents.send('visible', false);
    this.visible = false;
  }
}