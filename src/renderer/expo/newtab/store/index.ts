import React from "react";
import { observable } from "mobx";

class Dot {
    @observable
    public news = []

    constructor() {
        document.title = "New Tab"
        console.log(this)


    }
}

export default new Dot();