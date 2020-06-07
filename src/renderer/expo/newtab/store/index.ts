import React from "react";
import { observable } from "mobx";

class Dot {
    @observable
    public news = []

    constructor() {
        window.addEventListener('DOMContentLoaded', () => {
            document.title = "New Tab"
            console.log(this)

            fetch('https://dothq.co/api/browser.news')
                .then(res => res.json())
                .then(res => this.news = res)
        })
    }
}

export default new Dot();