import React from "react";

import { observable } from 'mobx';
import { ipcRenderer } from "electron";

class Dot {
    @observable
    public hovering: boolean = false;

    public outsideRef = React.createRef<HTMLDivElement>();
    public suggestionsRef = React.createRef<HTMLDivElement>();
    public menuRef = React.createRef<HTMLDivElement>();

    @observable
    public suggestionBoxActivate: boolean = false;

    @observable
    public suggestionBoxWidth: number = 0;

    @observable
    public suggestionBoxLeft: number = 0;

    @observable
    public menuActivate: boolean = false;

    @observable
    public menuWidth: number = 0;

    @observable
    public menuLeft: number = 0;

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
        })

        ipcRenderer.on('disable-suggestionbox', () => {
            this.suggestionBoxActivate = false;
        })

        ipcRenderer.on('width-suggestionbox', (e, width) => {
            this.suggestionBoxWidth = +width + 38;
        })

        ipcRenderer.on('left-suggestionbox', (e, width) => {
            this.suggestionBoxLeft = +width - 1;
        })

        ipcRenderer.on('activate-menu', () => {
            this.menuActivate = true;
        })

        ipcRenderer.on('disable-menu', () => {
            this.menuActivate = false;
        })

        ipcRenderer.on('left-menu', (e, width) => {
            this.menuLeft = +width - 1;
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