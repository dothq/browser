import store from '../store';
import { HistoryItem } from '../../app/models';
import { countVisitedTimes } from '../../app/utils';

interface HistorySuggestion extends HistoryItem {
    canSuggest?: boolean;
    isSearch?: boolean;
}

export const getHistorySuggestions = (filter: string) => {
    filter = filter.trim().toLowerCase();
  
    if (filter === '') {
      return [];
    }
  
    const regex = /(http(s?)):\/\/(www.)?|www./gi;
  
    let historyItems: HistorySuggestion[] = [];
    const urlMatchedItems: HistorySuggestion[] = [];
    const titleMatchedItems: HistorySuggestion[] = [];
  
    const filterPart = filter.replace(regex, '');
  
    console.log(store.history.items)

    for (const item of store.history) {
      let urlPart = item.url.replace(regex, '');
  
      if (urlPart.endsWith('/')) {
        urlPart = urlPart.slice(0, -1);
      }
  
      const itemToPush = {
        ...item,
        url: urlPart,
      };
  
      if (urlPart.indexOf('search?') !== -1) {
        const query = urlPart
          .split('q=')[1]
          .split('&')[0]
          .replace(/\+/g, ' ')
          .replace(/%20/g, ' ');
        if (
          query.startsWith(filterPart) &&
          urlMatchedItems.filter(x => x.url === query).length === 0
        ) {
          itemToPush.url = query;
          urlMatchedItems.push({ url: query, canSuggest: true, isSearch: true });
        }
      } else if (
        urlPart.toLowerCase().startsWith(filterPart) ||
        `www.${urlPart}`.startsWith(filterPart)
      ) {
        urlMatchedItems.push({ ...itemToPush, canSuggest: true });
      } else if (itemToPush.title.toLowerCase().includes(filter)) {
        titleMatchedItems.push({ ...itemToPush, canSuggest: false });
      }
    }
  
    let visitedTimes = countVisitedTimes(urlMatchedItems)
      .filter(Boolean)
      .slice(0, 5);
  
    historyItems = [];
  
    for (const item of visitedTimes) {
      historyItems.push(item.item);
    }
  
    visitedTimes = countVisitedTimes(titleMatchedItems)
      .filter(Boolean)
      .slice(0, 5);
  
    for (const item of visitedTimes) {
      historyItems.push(item.item);
    }
  
    return historyItems.slice(0, 5);
  };