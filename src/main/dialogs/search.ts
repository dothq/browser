import { AppWindow } from '../app-window';
import { Dialog } from './dialog';
import { ipcMain } from 'electron';

const WIDTH = 650;
const HEIGHT = 78;

export class SearchDialog extends Dialog {
  public visible = false;
  public lastHeight = 0;

  constructor(appWindow: AppWindow) {
    super(appWindow, {
      name: 'search',
      bounds: {
        width: WIDTH,
        height: HEIGHT,
        y: 80,
      },
      devtools: true
    });

    ipcMain.on(`height-${this.webContents.id}`, (e, height) => {
      const { width } = this.appWindow.getContentBounds();
      super.rearrange({
        height: 78 + height,
        x: Math.round(width / 2 - WIDTH / 2),
      });
      this.lastHeight = 78 + height;
    });

  }

  public rearrange() {
    const { width } = this.appWindow.getContentBounds();
    var x = Math.round(((width - WIDTH) / 2));
    super.setBounds({ x, y: 80, width: WIDTH, height: HEIGHT })
  }

  public show(content) {
    this.rearrange();
    super.show();
    this.visible = true;
    this.webContents.send('content', content);
    this.webContents.send('visible', true);
  }

  public hide() {
    this.webContents.send('visible', false);
    super.hide();
  }

}