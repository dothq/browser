import * as React from 'react';
import { observer } from 'mobx-react';
import { Section, Actions } from '../Overlay/style';
import { preventHiding, Header } from '../Overlay';
import { Bubble } from '../Bubble';
import { icons } from '../../constants';
import store from '../../store';

const changeContent = (content: 'history' | 'default' | 'bookmarks' | 'settings' | 'extensions' ) => () => {
  store.overlay.currentContent = content;
};

const onFindClick = () => {
  store.overlay.visible = false;

  store.tabs.selectedTab.findVisible = true;

  setTimeout(() => {
    store.tabs.selectedTab.findVisible = true;
  }, 200);
};

export const QuickMenu = observer(() => {
  return (
    <Section onClick={preventHiding}>
      <Header>Menu</Header>
      <Actions>
        <Bubble onClick={changeContent('history')} invert icon={icons.history}>
          {store.locale.lang.overlay[0].history_bubble}
        </Bubble>
        <Bubble
          onClick={changeContent('bookmarks')}
          invert
          icon={icons.bookmarks}
        >
          {store.locale.lang.overlay[0].bookmarks_bubble}
        </Bubble>
        <Bubble disabled invert icon={icons.download}>
          {store.locale.lang.overlay[0].downloads_bubble}
        </Bubble>
        <Bubble onClick={changeContent('settings')} invert icon={icons.settings}>
          {store.locale.lang.overlay[0].settings_bubble}
        </Bubble>
        <Bubble onClick={changeContent('extensions')} invert icon={icons.extensions}>
          {store.locale.lang.overlay[0].extensions_bubble}
        </Bubble>
        <Bubble
          disabled={!store.tabs.selectedTab}
          invert
          icon={icons.find}
          onClick={onFindClick}
        >
          {store.locale.lang.overlay[0].find_bubble}
        </Bubble>
        <Bubble disabled invert icon={icons.more}>
          {store.locale.lang.overlay[0].more_tools_bubble}
        </Bubble>
      </Actions>
    </Section>
  );
});
