import { NewsStore } from "../../../app/store/news";

class Store {
    public news: NewsStore = new NewsStore();
}

export default new Store();