import * as Datastore from 'nedb';
import { observable } from 'mobx';
import { getPath } from '~/shared/utils/paths';
import * as React from 'react';
import { resolve } from 'path';
import { homedir } from 'os';
import { icons } from '../constants';
import store from '.';
import { countVisitedTimes } from '../utils';
import console = require('console');
const editJsonFile = require("edit-json-file");
let file = editJsonFile(resolve(homedir()) + '/dot/dot-options.json');
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
      const data = await fetch('https://dot.ender.site/api/session/l', {
        method: 'post',
        body: JSON.stringify(body),
        headers: { 'content-type': 'application/json' }
      });
      const json = await data.json();

      if(json.message == "Logged in") {
        if(json.credentials) {
          this.username = json.credentials.customname
          this.email = json.credentials.email
          this.avatar = json.credentials.avatar
          this.loggedin = true;
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
