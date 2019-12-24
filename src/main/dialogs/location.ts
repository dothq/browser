import { AppWindow } from '../app-window';
import { Dialog } from './dialog';

const WIDTH = 330;
const HEIGHT = 50;

export class LocationDialog extends Dialog {
  public visible = false;

  constructor(appWindow: AppWindow) {
    super(appWindow, {
      name: 'location',
      bounds: {
        width: WIDTH,
        height: HEIGHT,
        y: 0,
      },
      devtools: false,
    });

    this.webContents.openDevTools()
  }

  public rearrange() {
    const { height, width } = this.appWindow.getContentBounds();
    super.rearrange({ x: 0, y: height - HEIGHT, width });
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