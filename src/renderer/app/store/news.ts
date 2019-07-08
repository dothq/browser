import { observable } from 'mobx';
import { ipcRenderer, remote } from 'electron';
import console = require('console');
import store from '.';
const editJsonFile = require("edit-json-file");

export class NewsStore {

  @observable
  public loaded: boolean = false;

  @observable
  public list: any = [];

  @observable
  public shouldLoadNews: boolean = false;

  public async load() {
    const data = await fetch(`https://dot.ender.site/v${store.api}/news`);
    const json = await data.json();

    console.log(data)

    this.shouldLoadNews = false;

    this.list = [];

    if(json.status == "ok") {

      for (var i = 0; i < json.articles.length; i++) {

        if(json.articles[i].urlToImage) {

          if(i != 5) {

            if(json.articles[i].title.length >= 60) {
              var lastIndex = json.articles[i].title.lastIndexOf("-");
              if(json.articles[i].title.substring(0, lastIndex).replace('\n', ' ').substring(0, 60).slice(-1) == " ") {
                var title = json.articles[i].title.substring(0, lastIndex).replace('\n', ' ').substring(0, 60-1) + '...'
              }
              else {
                var title = json.articles[i].title.substring(0, lastIndex).replace('\n', ' ').substring(0, 60) + '...'
              }
            }
            else {
              var title = `${json.articles[i].title.substring(0, lastIndex).replace('\n', ' ')}`;
            }
    
            this.list.push({
              url: json.articles[i].url,
              favicon: `https://www.google.com/s2/favicons?domain=${json.articles[i].url}`,
              source: json.articles[i].source.name.split(".")[0],
              title: title,
              wholeTitle: json.articles[i].title,
              desc: json.articles[i].description,
              image: `${json.articles[i].urlToImage}`,
              publishDate: json.articles[i].publishedAt,
              key: i
            })

          }
          else {
            break;
          }

        }
      }
    
    }
  }

  public async loadAll() {
    const data = await fetch(`https://dot.ender.site/v${store.api}/news`);
    const json = await data.json();

    this.shouldLoadNews = false;

    this.list = [];

    console.log(data)

    if(json.status == "ok") {

      for (var i = 0; i < json.articles.length; i++) {

        if(i != json.articles.length) {
          if(json.articles[i].urlToImage) {

            if(json.articles[i].title.length >= 60) {
              var lastIndex = json.articles[i].title.lastIndexOf("-");
              if(json.articles[i].title.substring(0, lastIndex).replace('\n', ' ').substring(0, 60).slice(-1) == " ") {
                var title = json.articles[i].title.substring(0, lastIndex).replace('\n', ' ').substring(0, 60-1) + '...'
              }
              else {
                var title = json.articles[i].title.substring(0, lastIndex).replace('\n', ' ').substring(0, 60) + '...'
              }
            }
            else {
              var title = `${json.articles[i].title.substring(0, lastIndex).replace('\n', ' ')}`;
            }
    
            this.list.push({
              url: json.articles[i].url,
              favicon: `https://www.google.com/s2/favicons?domain=${json.articles[i].url}`,
              source: json.articles[i].source.name.split(".")[0],
              title: title,
              wholeTitle: json.articles[i].title,
              desc: json.articles[i].description,
              image: `${json.articles[i].urlToImage}`,
              publishDate: json.articles[i].publishedAt,
              key: i
            })

          }
        }

        }
        
      }
    
    }

}