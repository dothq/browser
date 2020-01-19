import { observable } from "mobx";
import { ipcRenderer, remote } from 'electron';
import React from 'react';
import { SuggestionsStore } from './suggestions';
import { HistoryItem } from '../../app/models';

let lastSuggestion;

class Store {

    public suggestions: SuggestionsStore = new SuggestionsStore();

    public id = remote.getCurrentWebContents().id;

    public tabId: number = 1;

    public history: HistoryItem[] = [];

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
            console.log(items[0])
        })

        window.addEventListener('blur', () => {
            this.hide()
        })
    }

    public inputRef = React.createRef<HTMLInputElement>();

    @observable
    public visible: boolean = false;

    @observable
    public canSuggest: boolean = false;

    @observable
    public details = { 
        url: '',
        tabId: 1
    }

    public hide() {
        this.visible = false;
        ipcRenderer.send('hide-dialog', 'search');
    }

    public autoComplete = (input: any, suggestion: string) => {
        const regex = /(http(s?)):\/\/(www.)?|www./gi;
        const regex2 = /(http(s?)):\/\//gi;

        const start = input.value.length;

        if (input.selectionStart !== input.value.length) return;

        if (suggestion) {
            if (suggestion.startsWith(input.value.replace(regex, ''))) {
            input.value = input.value + suggestion.replace(input.value.replace(regex, ''), '');
            } else if (`www.${suggestion}`.startsWith(input.value.replace(regex2, ''))) {
            input.value =
            input.value + `www.${suggestion}`.replace(input.value.replace(regex2, ''), '');
            }
            input.setSelectionRange(start, input.value.length);
        }
    };

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

    }

}

export default new Store()