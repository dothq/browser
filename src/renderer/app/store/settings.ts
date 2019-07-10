import { observable, observe, action } from 'mobx';
import * as React from 'react';

import store from '.';
import { ipcRenderer, remote } from 'electron';
import { extname, resolve } from 'path';
import { homedir } from 'os';
import { icons } from '../constants/icons';

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
  public emojiSkinTone: string = opts.get("skinTone");

  @observable
  public skin: any;

  @action
  public emojiSkin(tone: string) {
    this.emojiSkinTone = tone;
    
    opts.set("skinTone", tone);
    opts.save()

    this.skin = icons.thumbs_up_default
    if(this.emojiSkinTone == 'pale') {
      this.skin = icons.thumbs_up_pale
    } else if(this.emojiSkinTone == 'medium_pale') {
      this.skin = icons.thumbs_up_medium_pale
    } else if(this.emojiSkinTone == 'medium') {
      this.skin = icons.thumbs_up_medium
    } else if(this.emojiSkinTone == 'medium_dark') {
      this.skin = icons.thumbs_up_medium_dark
    } else if(this.emojiSkinTone == 'dark') {
      this.skin = icons.thumbs_up_dark
    }    
  }

  public set changeDisplay(dis: any) {
    this.currentDisplay = dis;
  }
}
