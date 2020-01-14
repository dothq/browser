import { observable } from "mobx";
import { ipcRenderer, remote } from 'electron';
import React from 'react';
import { SuggestionsStore } from './suggestions';

class Store {

    public suggestions: SuggestionsStore = new SuggestionsStore();

    public id = remote.getCurrentWebContents().id;

    public tabId: number = 1;

    @observable
    public history = [];

    public constructor() {
        ipcRenderer.on('visible', (e, flag) => {
            this.visible = flag;

            console.log(this.details.url)

            this.tabId = this.details.tabId;

            if(this.details.url.startsWith('dot://newtab')) {
                this.details.url = '';
            }

            this.inputRef.current.value = this.details.url;
            this.inputRef.current.focus();
            this.inputRef.current.select();
        });

        ipcRenderer.on('content', (e, details) => {
            this.details = details;
            this.visible = true;
        })

        ipcRenderer.on('history-items', (e, items) => {
            console.log("Got history items!")
            this.history = items;
            console.log(items)
        })

        window.addEventListener('blur', () => {
            this.hide()
        })
    }

    public inputRef = React.createRef<HTMLInputElement>();

    @observable
    public visible: boolean = false;

    @observable
    public details = { 
        url: '',
        tabId: 1
    }

    public hide() {
        this.visible = false;
        ipcRenderer.send('hide-dialog', 'search');
    }

    public suggest() {
        const { suggestions } = this;
        const input = this.inputRef.current;
    
        if (this.canSuggest) {
          this.autoComplete(input.value, lastSuggestion);
        }
    
        suggestions.load(input).then(suggestion => {
          lastSuggestion = suggestion;
          if (this.canSuggest) {
            this.autoComplete(
              input.value.substring(0, input.selectionStart),
              suggestion,
            );
            this.canSuggest = false;
          }
        });
    
        suggestions.selected = 0;
    }

}

export default new Store()