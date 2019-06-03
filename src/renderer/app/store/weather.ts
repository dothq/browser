import { observable, observe, action } from 'mobx';
import * as React from 'react';

import store from '.';
import { ipcRenderer, remote } from 'electron';
import { extname } from 'path';
import { string } from 'prop-types';
import { checkServerIdentity } from 'tls';

// Special thanks to DusterTheFirst for this neat bit of code 😊

export class WeatherStore {

  @observable
  public location?: string;

  @observable
  public temp?: string;

  @observable
  public summary?: string;

  @observable
  public icon?: string;

  /** This function will be called when your app is first opened or when they need to reload the data */
  public async load() {
    this.location = await this.getData('l');
    this.temp = await this.getData('t');
    this.summary = await this.getData('s');
    this.icon = await this.getData('i');
  }

  private async getData(type: string): Promise<string> {
    const data = await fetch('https://dot.ender.site/weather');
    const json = await data.json();
    if(type == "l") {
      return await json.city;
    }
    if(type == "t") {
      return await json.temp;
    }
    if(type == "s") {
      return await json.weather;
    }
    if(type == "i") {
      return await json.icon;
    }
    else {
      return await JSON.stringify({
        error: 'Unexpected.'
      })
    }
  }

}
