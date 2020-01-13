import { DEFAULT_PREFERENCES } from '~/shared/models/default-preferences';
import { observable, computed } from 'mobx';
import { getTheme } from '~/shared/utils/themes';

class Store {
    @observable
    public conf: DEFAULT_PREFERENCES = { ...(window as any).settings };
  
    @computed
    public get theme() {
      return getTheme(this.conf.appearance.theme)
    }
}

export default new Store();