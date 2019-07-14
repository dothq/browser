import { observable, observe, action } from 'mobx';
import * as React from 'react';

import store from '.';
import * as Datastore from 'nedb';
import { ipcRenderer, remote } from 'electron';
import { extname, resolve } from 'path';
import { homedir } from 'os';
import { icons } from '../constants/icons';
import { getPath } from '~/shared/utils/paths';
import { Engine } from '../models/engine';

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

  public searchEnginesDB = new Datastore({
    filename: getPath('storage/engines.db'),
    autoload: true,
  });

  public addSe(item: Engine) {
    return new Promise((resolve: (id: string) => void) => {
      this.searchEnginesDB.insert(item, (err: any, doc: Engine) => {
        if (err) return console.error(err);

        this.seList.push(doc)
      });
    });
  }

  @observable
  public searchEngineCtx: boolean = false;

  @observable
  public emojiCtx: boolean = false;

  @observable
  public authorized: boolean = false;

  @observable
  public seList: any = [];

  @observable
  public seNameRef: any = React.createRef<HTMLDivElement>();

  @observable
  public seURLRef: any = React.createRef<HTMLDivElement>();

  @observable
  public seEditNameRef: any = React.createRef<HTMLDivElement>();

  @observable
  public seEditURLRef: any = React.createRef<HTMLDivElement>();

  @observable
  public seNameerror: boolean = false;

  @observable
  public seURLerror: boolean = false;

  @observable
  public searchEngineNewModal: boolean = false;

  @observable
  public searchEngineEditModal: boolean = false;

  @observable
  public emojiSkinTone: string = opts.get("skinTone");

  @observable
  public skin: any;

  @observable
  public seIsCustom: boolean = false;

  @observable
  public currentSearchEngine: string = opts.get("searchEngine");

  public getById(id: string) {
    return this.seList.find((x: any) => {
      return x._id === id;
    });
  }

  constructor() {
    this.load();
  }

  @action
  public setSearchEngine(engine: string, engineURI?: string) {
    opts.set("searchEngine", engine);
    this.seIsCustom = false;

    var uri = "";

    if(engineURI) {
      uri = `(${engineURI})`
      this.seIsCustom = true;
    }
    console.info(`\x1b[0mdot \x1b[32msuccess \x1b[0m Set searchEngine to ${engine} ${uri}`)
    opts.save(); 
    this.searchEngineCtx = false;
    store.options.currentSearchEngine = engine;
  }

  @action
  public deleteSe(id: string) {
    this.seList = this.seList.filter((x: any) => x._id !== id);

    this.searchEnginesDB.remove({ _id: id }, (err: any) => {
      if (err) return console.warn(err);
    });

    this.searchEngineEditModal = false;
    this.seIsCustom = false;
    this.currentSearchEngine = 'google'
  }

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

  public async load() {
    await this.searchEnginesDB.find({}).exec(async (err: any, items: Engine[]) => {
      if (err) return console.warn(err);

      this.seList = items;

      var se = this.getById(this.currentSearchEngine)
      if(se) {
        if(se.title) {
          this.seIsCustom = true;
        }
      }
      else {
        this.currentSearchEngine = 'google'
      }
    });
  }

  public getSeTitle() {
    var se = this.getById(store.options.currentSearchEngine);
    if(se) {
      if(se.title) {
        return se.title;
      }
    }
    else {
      return ''
    }
  }
}
