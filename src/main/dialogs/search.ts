import { AppWindow } from '../app-window';
import { Dialog } from './dialog';

const WIDTH = 650;
const HEIGHT = 78;

export class SearchDialog extends Dialog {
  public visible = false;

  constructor(appWindow: AppWindow) {
    super(appWindow, {
      name: 'search',
      bounds: {
        width: WIDTH,
        height: HEIGHT,
        y: 80,
      },
      hideTimeout: 300,
      devtools: true
    });
  }

  public rearrange() {
    const { width } = this.appWindow.getContentBounds();
    var x = Math.round(((width - WIDTH) / 2));
    super.setBounds({ x, y: 80, width: WIDTH, height: HEIGHT })
  }

  public show() {
    this.rearrange();
    super.show();
    this.webContents.send('visible', true);
    this.visible = true;
  }

  public hide() {
    this.webContents.send('visible', false);
    super.hide();
  }

  public send(content?: any) {
    this.webContents.send('content', content);
  }
}