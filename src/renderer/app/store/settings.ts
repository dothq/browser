import { observable, observe, action } from 'mobx';
import * as React from 'react';

import store from '.';
import { ipcRenderer, remote } from 'electron';
import { extname } from 'path';

export class OptionsStore {
  @observable
  public currentDisplay: 'profile' | 'appearance' | 'languages' | 'search_engine' | 'downloads' | 'dev' | 'about' = 'profile';

  public set changeDisplay(dis: any) {
    this.currentDisplay = dis;
  }
}
