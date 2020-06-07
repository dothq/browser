import React from "react";
import { observable } from "mobx";

class Dot {
    @observable
    public news = []

    constructor() {
        window.addEventListener('DOMContentLoaded', () => {
            fetch("https://dothq.co/api/browser.news", ({ headers: { 'X-Dot-NTP': true } } as any))
                .then(res => res.json())
                .then(async res => {
                    // res.articles = res.articles.filter(a => a.urlToImage !== null)

                    const chunked = res.articles.reduce((all,one,i) => {
                        const ch = Math.floor(i/3); 
                        all[ch] = [].concat((all[ch]||[]),one); 
                        return all
                    }, [])
                    
                    chunked.forEach((chunk, indx) => {
                        if(indx % 2 == 0) {
                            chunked[indx][0].large = true
                        } else {
                            chunked[indx][chunked[indx].length-1].large = true
                        }

                        chunked[indx].forEach(article => this.news.push(article))
                    })
                })
        })
    }
}

export default new Dot();