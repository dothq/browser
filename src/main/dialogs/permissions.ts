import { AppWindow } from '../app-window';
import { Dialog } from './dialog';
import { ipcMain } from 'electron';

const WIDTH = 400;
const HEIGHT = 180;

export class PermissionsDialog extends Dialog {
  public visible = false;

  constructor(appWindow: AppWindow) {
    super(appWindow, {
      name: 'permissions',
      bounds: {
        width: WIDTH,
        height: HEIGHT,
        y: 36,
      },
      devtools: true
    });
  }

  public rearrange() {
    var x = 0;
    super.setBounds({ x, y: 36, width: WIDTH, height: HEIGHT })
  }

  public show() {
    this.rearrange();
    super.show();
    this.webContents.send('visible', true);
    this.visible = true;
  }

  public hide() {
    this.rearrange();
    this.webContents.send('visible', false);
    setTimeout(() => {
        super.hide();
        this.visible = false;
    }, 100);
  }

  public async requestPermission(
    name: string,
    url: string,
    details: any,
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (
        name === 'unknown' ||
        (name === 'media' && details.mediaTypes.length === 0)
      ) {
        return reject('Unknown permission');
      }

      this.rearrange();
      this.show()

      this.webContents.send('request-permission', { name, url, details });

      ipcMain.once(
        'request-permission-result',
        (e: any, r: boolean, permission: any) => {
          resolve(r);
          if (permission == 'http_permission') {
            this.appWindow.viewManager.selected.webContents.loadURL(
              `https://${
                this.appWindow.viewManager.selected.webContents
                  .getURL()
                  .split('://')[1]
              }`,
            );
          }
        },
      );
    });
  }
}