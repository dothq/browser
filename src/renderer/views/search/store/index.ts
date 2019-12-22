import { observable } from "mobx";
import { ipcRenderer } from 'electron';
import React from 'react';

class Store {

    public constructor() {
        ipcRenderer.on('visible', (e, flag) => {
            this.visible = flag;

            if(this.details.url == 'dot://newtab') {
                this.details.url = '';
            }

            this.inputRef.current.value = this.details.url;
            this.inputRef.current.focus();
        });

        ipcRenderer.on('content', (e, details) => {
            this.details = details;
            this.visible = true;
        })

        window.addEventListener('blur', () => {
            this.hide()
        })
    }

    public inputRef = React.createRef<HTMLInputElement>();

    @observable
    public visible: boolean = false;

    @observable
    public details = { url: '' };

    public hide() {
        this.visible = false;
        setTimeout(() => {
            ipcRenderer.send('hide-dialog', 'search');
        }, 300);
    }
}

export default new Store()