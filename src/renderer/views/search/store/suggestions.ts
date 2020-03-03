import { observable, computed } from 'mobx';
import { isURL } from '~/shared/utils/url';
import { icons } from '../../app/constants';
import { Suggestion } from '../../app/models';
import { getHistorySuggestions } from '../utils/suggestions';
import { getSearchSuggestions } from '../../app/utils';

let searchSuggestions: Suggestion[] = [];

export class SuggestionsStore {

    @observable
    public selected = 0;

    @observable
    public list: any = [];

    @computed
    public get selectedSuggestion() {
      return this.list.find(x => x._id === this.selected);
    }

    public load(input: HTMLInputElement): Promise<string> {
      return new Promise(async resolve => {
        const filter = input.value.substring(0, input.selectionStart);
        const history = getHistorySuggestions(filter);
  
        const historySuggestions: Suggestion[] = [];
  
        if ((!history[0] || !history[0].canSuggest) && filter.trim() !== '') {
          if (isURL(filter) || filter.indexOf('://') !== -1) {
            historySuggestions.unshift({
              primaryText: filter,
              secondaryText: 'open website',
              favicon: icons.page,
            });
          }
        }
  
        for (const item of history) {
          if (!item.isSearch) {
            historySuggestions.push({
              primaryText: item.url,
              secondaryText: item.title,
              favicon: item.favicon,
              canSuggest: item.canSuggest,
            });
          } else {
            historySuggestions.push({
              primaryText: item.url,
              favicon: icons.search,
              canSuggest: item.canSuggest,
              isSearch: true,
            });
          }
        }
  
        historySuggestions.splice(1, 0, {
          primaryText: filter,
          secondaryText: `search on Google`,
          favicon: icons.search,
          isSearch: true,
        });
  
        let suggestions: Suggestion[] =
          input.value === ''
            ? []
            : historySuggestions.concat(searchSuggestions).slice(0, 5);
  
        for (let i = 0; i < suggestions.length; i++) {
          suggestions[i].id = i;
        }
  
        this.list = suggestions;
  
        if (historySuggestions.length > 0 && historySuggestions[0].canSuggest) {
          resolve(historySuggestions[0].primaryText);
        }
  
        try {
          const searchData = await getSearchSuggestions(filter);
  
          if (input.value.substring(0, input.selectionStart) === filter) {
            searchSuggestions = [];
            for (const item of searchData) {
              searchSuggestions.push({
                primaryText: item,
                favicon: icons.search,
                isSearch: true,
              });
            }
  
            suggestions =
              input.value === ''
                ? []
                : historySuggestions.concat(searchSuggestions).slice(0, 5);
  
            for (let i = 0; i < suggestions.length; i++) {
              suggestions[i].id = i;
            }
  
            this.list = suggestions;
          }
        } catch (e) {
          console.error(e);
        }
      });
    }
}