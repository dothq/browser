export class NewsStore {
  public loaded: boolean = false;

  public list: any = [];

  public shouldLoadNews: boolean = false;

  public async load() {
    const data = await fetch(`https://api.dotbrowser.me/v2/news`);
    const json = await data.json();

    this.shouldLoadNews = false;

    this.list = [];

    if (json.status == 'ok') {
      for (var i = 0; i < json.articles.length; i++) {
        if (json.articles[i].urlToImage) {
          this.list.push({
            url: json.articles[i].url,
            favicon: `https://www.google.com/s2/favicons?domain=${
              json.articles[i].url
            }`,
            source: json.articles[i].source.name.split('.')[0],
            title: json.articles[i].title,
            desc: json.articles[i].description,
            image: `${json.articles[i].urlToImage}`,
            publishDate: new Date(json.articles[i].publishedAt).getTime(),
            key: i,
          });
        }
      }
    }

    console.log(this.list);
  }
}
