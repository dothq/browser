import { observable, observe, action } from 'mobx';
import * as React from 'react';

import store from '.';
import { ipcRenderer, remote } from 'electron';
import { extname, resolve } from 'path';
import { homedir } from 'os';

const editJsonFile = require("edit-json-file");
const opts = editJsonFile(resolve(homedir() + '/dot/dot-options.json'));

if(!opts.get("searchEngine")) {
  opts.set("searchEngine", "google");
  opts.save();
}

if(!opts.get("toggleDotLauncher")) {
  opts.set("toggleDotLauncher", true);
  opts.save();
}

export class OptionsStore {
  @observable
  public currentDisplay: 'profile' | 'appearance' | 'languages' | 'search_engine' | 'downloads' | 'dev' | 'about' | 'send_feedback' = 'profile';

  @observable
  public searchEngineCtx: boolean = false;

  public set changeDisplay(dis: any) {
    this.currentDisplay = dis;
  }
}
