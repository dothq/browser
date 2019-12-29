import { observable, observe, action } from 'mobx';
import * as React from 'react';

import store from '../store';
import Datastore from 'nedb';
import { getPath } from '~/shared/utils/paths';
import { Engine } from '../models/engine';

export class OptionsStore {
  @observable
  public currentDisplay:
    | 'profile'
    | 'appearance'
    | 'languages'
    | 'search'
    | 'downloads'
    | 'dev'
    | 'about'
    | 'send_feedback'
    | 'passwords' = 'profile';

  public searchEnginesDB = new Datastore({
    filename: getPath('storage/engines.db'),
    autoload: true,
  });

  public addSe(item: Engine) {
    return new Promise((resolve: (id: string) => void) => {
      this.searchEnginesDB.insert(item, (err: any, doc: Engine) => {
        if (err) return console.error(err);

        this.seList.push(doc);
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
  public emojiSkinTone: string = '';

  @observable
  public themeSelect: boolean = false;

  @observable
  public theme: 'dark' | 'light' = 'light';

  @observable
  public themes: any = ['Dark', 'Light'];

  @observable
  public worldType: any = '';

  @observable
  public skin: any;

  @observable
  public seIsCustom: boolean = false;

  @observable
  public currentSearchEngine: string = 'google';

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

  }

  @action
  public deleteSe(id: string) {
    this.seList = this.seList.filter((x: any) => x._id !== id);

    this.searchEnginesDB.remove({ _id: id }, (err: any) => {
      if (err) return console.warn(err);
    });

    this.searchEngineEditModal = false;
    this.seIsCustom = false;
    this.currentSearchEngine = 'google';
  }

  @action
  public setTheme(theme: 'dark' | 'light') {

  }

  @action
  public emojiSkin(tone: string) {
 
  }

  public set changeDisplay(dis: any) {
    this.currentDisplay = dis;
  }

  public async load() {
    await this.searchEnginesDB
      .find({})
      .exec(async (err: any, items: Engine[]) => {
        if (err) return console.warn(err);

        this.seList = items;

        var se = this.getById(this.currentSearchEngine);
        if (se) {
          if (se.title) {
            this.seIsCustom = true;
          }
        } else {
          this.currentSearchEngine = 'google';
        }
      });
  }

  public getSeTitle() {
    var se = this.getById(store.options.currentSearchEngine);
    if (se) {
      if (se.title) {
        return se.title;
      }
    } else {
      return '';
    }
  }
}
