import { observable } from 'mobx';
import { ipcRenderer, remote } from 'electron';
import console = require('console');
const editJsonFile = require("edit-json-file");

export class NewsStore {

  @observable
  public loaded: boolean = false;

  @observable
  public list: any = [];

  public async load() {
    const data = await fetch(`https://dot.ender.site/news`);
    const json = await data.json();

    console.log(data)

    if(json.status == "ok") {

      for (var i = 0; i < json.articles.length; i++) {

        if(json.articles[i].urlToImage) {

          if(i != 5) {

            if(json.articles[i].title.length >= 65) {
              if(json.articles[i].title.split("-")[0].substring(0, 65).slice(-1) == " ") {
                var title = json.articles[i].title.split("-")[0].substring(0, 65-1) + '...'
              }
              else {
                var title = json.articles[i].title.split("-")[0].substring(0, 65) + '...'
              }
            }
            else {
              var title = `${json.articles[i].title.split("-")[0]}`;
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
    

      // json.articles.forEach((n: any) => {
      //   if(n.urlToImage) {
      //     ++index
      //     if(n.title.length >= 60) {
      //       if(n.title.split("-")[0].substring(0, 60).slice(-1) == " ") {
      //         var title = n.title.split("-")[0].substring(0, 60-1) + '...'
      //       }
      //       else {
      //         var title = n.title.split("-")[0].substring(0, 60) + '...'
      //       }
      //     }
      //     else {
      //       var title = `${n.title.split("-")[0]}`;
      //     }
      //     this.list.push({
      //       url: n.url,
      //       favicon: `https://www.google.com/s2/favicons?domain=${n.url}`,
      //       source: n.source.name.split(".")[0],
      //       title: title,
      //       desc: n.description,
      //       image: `${n.urlToImage}`,
      //       publishDate: n.publishedAt,
      //       key: index
      //     })
      //     console.log("pushed")
      //   }
      // });
    }
  }

}