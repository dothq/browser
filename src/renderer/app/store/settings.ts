import { observable, observe, action } from 'mobx';
import * as React from 'react';

import store from '.';
import { ipcRenderer, remote } from 'electron';
import { extname, resolve } from 'path';
import { homedir } from 'os';

const json = require("edit-json-file");
const opts = json(resolve(homedir() + '/dot/dot-options.json'));

if(!opts.get("searchEngine")) {
  opts.set("searchEngine", "google");
  opts.save();
}

if(!opts.get("toggleDotLauncher")) {
  opts.set("toggleDotLauncher", true);
  opts.save();
}

if(!opts.get("skinTone")) {
  opts.set("skinTone", 'default');
  opts.save();
}

export class OptionsStore {
  @observable
  public currentDisplay: 'profile' | 'appearance' | 'languages' | 'search_engine' | 'downloads' | 'dev' | 'about' | 'send_feedback' | 'passwords' = 'profile';

  @observable
  public searchEngineCtx: boolean = false;

  @observable
  public emojiCtx: boolean = false;

  @observable
  public authorized: boolean = false;

  @observable
  public emojiSkinTone: 'default' | 'pale' | 'medium_pale' | 'medium' | 'medium_dark' | 'dark' = opts.get("skinTone");

  public set emojiSkin(tone: 'default' | 'pale' | 'medium_pale' | 'medium' | 'medium_dark' | 'dark') {
    this.emojiSkinTone = tone;
  }

  public set changeDisplay(dis: any) {
    this.currentDisplay = dis;
  }
}
