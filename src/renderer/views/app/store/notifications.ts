import { ipcRenderer, remote, screen } from 'electron';
import { observable, action } from 'mobx';
import { defaultNotifOptions, TOOLBAR_HEIGHT } from '../constants'
import { resolve } from 'path';
import store from '../store';
import { windowsManager } from '..';
var modal = require('electron-modal');

export class NotifsStore {

  public handler: any;

  public showPermissionWindow() {
    // this.handler.show();
  }

  public hidePermissionWindow() {
    // this.handler.hide();
  }

  public async loadP() {


    // // Permission Notification
    // var win = new remote.BrowserWindow({
    //   modal: true,
    //   x: screen.getPrimaryDisplay().size.width-screen.getPrimaryDisplay().size.width,
    //   y: 40,
    //   width: 320+80,
    //   height: 130+80,
    //   resizable: false,
    //   skipTaskbar: true,
    //   transparent: true,
    //   alwaysOnTop: true,
    //   title: 'Dot Notification Handler',
    //   titleBarStyle: 'hidden',
    //   webPreferences: {
    //     nodeIntegration: true
    //   },
    //   frame: true
    // });

    // this.handler = win;

    // win.quit()

    // win.loadURL(resolve(remote.app.getAppPath() + '\\static\\pages\\dialog\\notification.html'));

    // // win.webContents.toggleDevTools();

    // win.webContents.on('did-finish-load', async () => {

    //   win.hide();
    //   win.webContents.send("new-notification", 'example.com||Location');

    //   win.on('hide', () => {
    //     win.hide()
    //   })

    // });
    

    // // this.handler = await modal.open(), {
    // //   x: screen.getPrimaryDisplay().size.width-400,
    // //   y: 0,
    // //   width: 400,
    // //   height: screen.getPrimaryDisplay().size.height,
    // //   resizable: false,
    // //   skipTaskbar: false,
    // //   title: 'Dot Notification Handler',
    // //   titleBarStyle: 'hidden',
    // //   devtools: false,
    // //   webPreferences: {
    // //     nodeIntegration: true
    // //   },
    // //   frame: false
    // // });

    // // this.handler.show()
    // // this.handler.emit('new-notification', { title: 'Test', body: 'Lol testing' });

    // // this.handler.on('hide', function(e: React.MouseEvent<HTMLDivElement>) {
    // //   e.stopPropagation()
    // //   return false;
    // // })
  }

  @action
  public create(options = defaultNotifOptions) {



  }

  public loadAll() {
    this.loadP()
  }

}
