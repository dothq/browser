import { observable, observe, action } from 'mobx';
import * as React from 'react';

import store from '.';
import { ipcRenderer, remote } from 'electron';
import { extname, resolve } from 'path';
import { string } from 'prop-types';
import { checkServerIdentity } from 'tls';
import console = require('console');
import { homedir } from 'os';
const editJsonFile = require("edit-json-file");
let file = editJsonFile(resolve(homedir()) + '/dot/dot-options.json');

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
  public tempindicator?: string;

  /** This function will be called when your app is first opened or when they need to reload the data */
  public async load(deg: string) {

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
      else {
        if(!file.get("tempType")) {
          return dt = "c"
        }
        dt = file.get("tempType");
      }

      const data = await fetch(`https://dot.ender.site/weather?d=${dt}`);
      const json = await data.json();

      this.location = json.city;
      this.temp = json.temp;
      this.summary = json.weather;
      this.icon = json.icon;
      this.timetype = json.timetype;
    }
    catch (e) {
      console.log(e)
    }
  }

}
