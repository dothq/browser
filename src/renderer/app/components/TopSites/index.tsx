import * as React from 'react';
import { observer } from 'mobx-react';
import { Actions } from '../Overlay/style';
import store from '../../store';
import { Bubble } from '../Bubble';
import { onSiteClick } from '../../utils/dials';
import { icons } from '../../constants/icons';

export const TopSites = observer(() => {
  return (
    <Actions>
      {store.history.topSites.map(item => {

        var favicon = store.favicons.favicons[item.favicon]

        return (
          <Bubble
            itemsPerRow={6}
            onClick={onSiteClick(item.url)}
            key={item._id}
            maxLines={1}
            iconSize={20}
            light
            isFavicon={true}
            icon={favicon}
          >
            {item.title}
          </Bubble>
        )
      })}
    </Actions>
  );
});
