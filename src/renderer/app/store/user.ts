import * as Datastore from 'nedb';
import { observable } from 'mobx';
import { getPath } from '~/shared/utils/paths';
import * as React from 'react';
import { resolve } from 'path';
import { homedir } from 'os';
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
  public avatar?: string;

  @observable
  public loginState?: string = "Waiting";
 
  public async login(email: string, password: string) {
    const body = {
      email,
      password
    }
    const data = await fetch('https://dot.ender.site/app/session/l', {
      method: 'post',
      body: JSON.stringify(body)
    });
    const json = await data.json();

    // Will happen.
    if(json.message == "Logged in") {
      // ACK
      this.loginState = "Logged in."
    }
    if(json.message == "Check your email for a verification email.") {
      this.loginState = "Check your email for a verification email."
    }

    // Likely
    if(json.message == "Incorrect password.") {
      this.loginState = "Incorrect password.";
    }
    if(json.message = "User not found.") {
      this.loginState = "Email not found.";
    }

    // Unlikely to happen
    if(json.message == "No email specified.") {
      this.loginState = "No email specified.";
    }
    if(json.message == "No password specified.") {
      this.loginState = "No password specified.";
    }
  }

  public async load() {
    if(file.get("creds.email")) {

    }
    if(!file.get("creds.email")) {
      file.set("creds.email", "");
    }
    file.save()
  }

}
