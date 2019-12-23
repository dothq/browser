import { observable } from 'mobx';

interface Options {
  icon: string;
  title: string;
}

export class BrowserAction {
  @observable
  public icon?: string;

  @observable
  public title?: string;

  @observable
  public badgeBackgroundColor?: string = 'gray';

  @observable
  public badgeTextColor?: string = 'white';

  @observable
  public badgeText?: string = '';

  constructor(options: Options) {
    const { icon, title } = options;
    this.icon = icon;
    this.title = title;
  }
}
