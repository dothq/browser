import { observable, observe, action } from 'mobx';
import * as React from 'react';

import store from '.';
import { ipcRenderer, remote } from 'electron';
import { extname, resolve } from 'path';
import { string } from 'prop-types';
import { checkServerIdentity } from 'tls';
import console = require('console');
import { homedir } from 'os';
const json = require("edit-json-file");
let file = json(resolve(homedir()) + '/dot/dot-options.json');

// Special thanks to DusterTheFirst for this neat bit of code 😊

export class WeatherStore {

  @observable
  public loaded?: boolean = false;

  @observable
  public location?: string;

  @observable
  public temp?: string;

  @observable
  public summary?: string;

  @observable
  public icon?: string;

  @observable
  public timetype?: string;

  @observable
  public timeInt?: number;

  @observable
  public tempindicator?: string;

  /** This function will be called when your app is first opened or when they need to reload the data */
  public async load(deg?: string) {

    try {

      if(!file.get("tempType")) {
        file.set("tempType", "c");
        file.save()
      }

      var dt = "c";
      if(deg) {
        if(deg == "F") {
          dt = "F"
        }
      }
      if(!deg) {
        if(!file.get("tempType")) {
          return dt = "c"
        }
        dt = file.get("tempType");
      }

      const data = await fetch(`https://dot.ender.site/v${store.api}/weather?d=${dt}`);
      const json = await data.json();

      this.location = json.city;
      this.temp = json.temp;
      this.summary = json.weather;
      this.icon = json.icon;
      this.timetype = json.timetype;

      if(this.timetype == "Day") {
        this.timeInt = 0;
      }
      if(this.timetype == "Morning") {
        this.timeInt = 1;
      }
      if(this.timetype == "Afternoon") {
        this.timeInt = 2;
      }
      if(this.timetype == "Night") {
        this.timeInt = 3;
      }
      
      this.timeInt = 2;
      this.loaded = true;
    }
    catch (e) {
      console.log(e)
    }
  }

}
