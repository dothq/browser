import { observable, observe, action } from 'mobx';
import * as React from 'react';

import store from '../store';
import { ipcRenderer, remote } from 'electron';
import { extname } from 'path';

export class AbStore {
  @observable
  public isToggled: boolean = false;
}
