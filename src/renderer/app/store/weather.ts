import { observable, observe, action } from 'mobx';
import * as React from 'react';

import store from '.';
import { ipcRenderer, remote } from 'electron';
import { extname, resolve } from 'path';
import { string } from 'prop-types';
import { checkServerIdentity } from 'tls';
import console = require('console');
import { homedir } from 'os';
import { FORECAST_KEY } from '../constants'; /* Forecast key is used to fetch the DarkSky API */
const editJsonFile = require("edit-json-file");
let file = editJsonFile(resolve(homedir()) + '/dot/dot-options.json');

//New class by Daniel Bulant
//New class, for easier day storing
export class WeatherStoreDay{

  @observable
  public maxTemp?: number = 20;

  @observable
  public minTemp?: number = 12;
  
  @observable
  public summary?: string;

  @observable
  public name?: string = "Day";

  @observable
  public icon?: string;
}

export class WeatherStore {

  @observable
  public loaded?: boolean = false;

  @observable
  public location?: string = "Offline";

  @observable
  public temp?: number = 0;

  @observable
  public summary?: string = "Unable to get weather";

  @observable
  public icon?: string;

  @observable
  public timetype?: string = "Offline";

  @observable
  public timeInt?: number = 3;

  @observable
  public tempindicator?: string;

  @observable
  public day1: WeatherStoreDay = new WeatherStoreDay;

  @observable
  public day2: WeatherStoreDay = new WeatherStoreDay;

  @observable
  public day3: WeatherStoreDay = new WeatherStoreDay;

  @observable
  public day4: WeatherStoreDay = new WeatherStoreDay;

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
        } else {
          dt = file.get("tempType");
        }
      }
      //darksky uses different form, ca for Celsius, uk2 for Farnheit
      var indicator = store.weather.tempindicator == "c" ? "ca" : "uk2";
      //To get current position, returns lat and lon (double precision)
      var ip_url = 'http://ip-api.com/json/';
      var ip_loc = await fetch(ip_url);
      ip_loc = await ip_loc.json();

      //CORS anywhere needed, darksky API don't have CORS headers
      var api_url = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"+FORECAST_KEY+"/"+ ip_loc.lat + "," + ip_loc.lon +"/?exclude=flags,hourly,alerts&lang=" + store.locale.currentLanguage + "&units="+indicator;
      const data = await fetch(api_url);
      const json = await data.json();

      this.location = ip_loc.city;
      this.temp = json.currently.temperature;
      this.temp = Math.round(this.temp);
      this.summary = json.currently.summary;
      this.icon = json.icon;

      this.timetype = "Day"
      this.timeInt = 0

      if (new Date(1564166909*1000).getHours() < 12) {
        this.timetype = "Morning"
        this.timeInt = 1
      } else if (new Date(1564166909*1000).getHours() < 18) {
        this.timetype = "Afternoon"
        this.timeInt = 2
      } else {
        this.timetype = "Night"
        this.timeInt = 3
      }

      this.timeInt = 3

      var date = new Date();
  
      //Tomorrow, day after tomorrow etc.
      var day1 = new Date(date.getTime() + 24 * 60 * 60 * 1000);
      var day2 = new Date(day1.getTime() + 24 * 60 * 60 * 1000);
      var day3 = new Date(day2.getTime() + 24 * 60 * 60 * 1000);
      var day4 = new Date(day3.getTime() + 24 * 60 * 60 * 1000);
      //Set names. Need to update locales (I fixed en.json and cz.json)
      this.day1.name = store.locale.lang.days[day1.getDay()];
      this.day2.name = store.locale.lang.days[day2.getDay()];
      this.day3.name = store.locale.lang.days[day3.getDay()];
      this.day4.name = store.locale.lang.days[day4.getDay()];
      this.day1.maxTemp = Math.round(json.daily.data[1].temperatureHigh);
      this.day1.minTemp = Math.round(json.daily.data[1].temperatureLow);
      this.day2.maxTemp = Math.round(json.daily.data[2].temperatureHigh);
      this.day2.minTemp = Math.round(json.daily.data[2].temperatureLow);
      this.day3.maxTemp = Math.round(json.daily.data[3].temperatureHigh);
      this.day3.minTemp = Math.round(json.daily.data[3].temperatureLow);
      this.day4.maxTemp = Math.round(json.daily.data[4].temperatureHigh);
      this.day4.minTemp = Math.round(json.daily.data[4].temperatureLow);
      this.day1.summary = json.daily.data[1].summary;
      this.day2.summary = json.daily.data[2].summary;
      this.day3.summary = json.daily.data[3].summary;
      this.day4.summary = json.daily.data[4].summary;
      
      
      
      

      /**
       * Loaded the weather ✨ magic
      */
      this.loaded = true;
      

    }
    catch (e) {
      
    }
  }

}