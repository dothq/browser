import { AppWindow } from '../app-window';
import { Dialog } from './dialog';

const WIDTH = 1000;
const HEIGHT = 700;

export class PrintDialog extends Dialog {
  public visible = false;

  constructor(appWindow: AppWindow) {
    super(appWindow, {
      name: 'print',
      bounds: {
        width: WIDTH,
        height: HEIGHT,
        y: 36,
      },
      devtools: true
    });
  }

  public rearrange() {
    const { width } = this.appWindow.getContentBounds();
    var x = Math.round(((width - WIDTH) / 2));
    super.rearrange({ x });
  }

  public show() {
    super.show();
    this.webContents.send('visible', true);
    this.visible = true;
  }

  public hide() {
    this.webContents.send('visible', false);
    setTimeout(() => {
        super.hide();
        this.visible = false;
    }, 100);
  }
}