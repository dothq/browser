import Datastore from 'nedb';
import { observable } from 'mobx';
import { getPath } from '~/shared/utils/paths';
import * as React from 'react';
import { resolve } from 'path';
import { homedir, platform } from 'os';
import { icons } from '../constants';
import store from '../store';
import { countVisitedTimes } from '../utils';
import console = require('console');
import { remote } from 'electron';
const json = require("edit-json-file");
let file = json(resolve(homedir()) + '/dot/dot-options.json');
const fetch = require("node-fetch");

export class UserStore {

  @observable
  public loggedin?: boolean = false;

  @observable
  public username?: string;

  @observable
  public email?: string;

  @observable
  public avatar?: string = icons.user;

  @observable
  public menuVisible?: boolean = false;

  @observable
  public experiments?: boolean = false;

  @observable
  public loginState?: string = "Login to your Dot account";
 
  public async loadProfile() {
    var fp = localStorage.getItem("dot_footprint");
    if(fp) {
      var decodedfp = atob(fp);

      var email = decodedfp.split("||")[0];
      var password = decodedfp.split("||")[1];
  
      const body = {
        email,
        password
      }
      const data = await fetch(`https://api.dotbrowser.me/api/session/l`, {
        method: 'post',
        body: JSON.stringify(body),
        headers: { 'content-type': 'application/json', 'X-Dot-Version': `${remote.app.getVersion()}`, 'X-Operating-System': `${platform()}` }
      });
      const json = await data.json();

      if(json.message == "Logged in") {
        if(json.credentials) {
          this.username = json.credentials.customname
          this.email = json.credentials.email
          this.avatar = json.credentials.avatar
          this.loggedin = true;

          const experiments = await fetch(`https://api.dotbrowser.me/api/v${store.api}/experiments/users`, {
            method: 'get',
            headers: { 'content-type': 'application/json' }
          });

          const expjson = await experiments.json();

          if(expjson.includes(json.credentials.email) == true) {
            this.experiments = true;
          }

        }
      }
      else {
        localStorage.setItem("lkr", json)
        localStorage.setItem("dot_footprint", null);
        this.loggedin = false;
      }
    }
  }

}
