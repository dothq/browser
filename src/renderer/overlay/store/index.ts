import React from "react";

import { observable } from 'mobx';
import { ipcRenderer } from "electron";

class Dot {
    @observable
    public hovering: boolean = false;

    public outsideRef = React.createRef<HTMLDivElement>();
    public suggestionsRef = React.createRef<HTMLDivElement>();

    @observable
    public suggestionBoxActivate: boolean = false;

    public updatePointerEvents() {
        console.log(this.hovering ? 'allow' : 'ignore')
        ipcRenderer.send(`${!this.hovering ? 'allow' : 'ignore'}-pointer-events`)
    }

    constructor() {
        ipcRenderer.on('update-cursor', (e, cursor) => {
            if(this.hovering == false) {
                document.body.style.cursor = cursor;
            }
        })

        ipcRenderer.on('activate-suggestionbox', () => {
            this.suggestionBoxActivate = true;
            console.log('update suggestionbox')
        })

        window.addEventListener('DOMContentLoaded', () => {
            this.suggestionsRef.current.addEventListener('mouseenter', () => {
                this.hovering = true;
                console.log("a", this.hovering ? 'allow' : 'ignore')
                this.updatePointerEvents();
            })
    
            this.suggestionsRef.current.addEventListener('mouseleave', () => {
                this.hovering = false;
                console.log("a", this.hovering ? 'allow' : 'ignore')
                this.updatePointerEvents();
            })
        })
    }
}

export default new Dot();