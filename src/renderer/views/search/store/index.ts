import { observable, computed } from "mobx";
import { ipcRenderer, remote } from 'electron';
import React from 'react';
import { SuggestionsStore } from './suggestions';
import { Suggestion } from '../../app/models/suggestion';
import { icons } from '../../app/constants';

let lastSuggestion;

class Store {

    public suggestions: SuggestionsStore = new SuggestionsStore();

    @observable
    public id = remote.getCurrentWebContents().id;

    @observable
    public tabId: number = 1;

    public history: Suggestion[] = [];

    public constructor() {
        ipcRenderer.on('visible', (e, flag) => {
            this.visible = flag;

            this.suggestions.list = [];

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
            // this.history = items;
        })

        window.addEventListener('blur', () => {
            this.hide()
        })
    }

    @observable
    public inputRef = React.createRef<HTMLInputElement>();

    @observable
    public visible: boolean = false;

    @observable
    public canSuggest: boolean = false;

    @observable
    public details = { 
        url: '',
        tabId: 1,
        favicon: icons.search
    }

    public hide() {
        this.visible = false;
        ipcRenderer.send('hide-dialog', 'search'); 
    }

    public autoComplete = (inputValue: any, suggestion: string) => {
        const regex = /(http(s?)):\/\/(www.)?|www./gi;
        const regex2 = /(http(s?)):\/\//gi;

        const input = this.inputRef.current;

        const start = inputValue.length;

        if (input.selectionStart !== inputValue.length) return;

        if (suggestion) {
            if (suggestion.startsWith(inputValue.replace(regex, ''))) {
                inputValue = inputValue + suggestion.replace(inputValue.replace(regex, ''), '');
            } else if (`www.${suggestion}`.startsWith(inputValue.replace(regex2, ''))) {
                inputValue =
                inputValue + `www.${suggestion}`.replace(inputValue.replace(regex2, ''), '');
            }

            input.setSelectionRange(start, inputValue.length);
        }
    };

    public suggest() {
        const { suggestions } = this;
        const input = this.inputRef.current;
    
        if(input.value.length == 0) input.selectionStart = 1;

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