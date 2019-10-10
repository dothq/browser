import * as React from 'react';
import { observer } from 'mobx-react';

import { StyledMenu } from './style';
import { MenuItem } from '../MenuItem/style';
import { Line } from '~/renderer/app/components/App/style';
import { icons } from '../../../../constants/icons';
import store from '~/renderer/app/store';

export const Menu = observer(() => {
  return (
    <StyledMenu visible={store.quickMenuVisible == true}>
      <MenuItem icon={icons.add}>New tab</MenuItem>
      <MenuItem icon={icons.add}>New window</MenuItem>
      <Line
        style={{
          backgroundColor: '#80808030',
          marginBottom: '5px',
          marginTop: '0px',
        }}
      />
      <MenuItem icon={icons.history}>History</MenuItem>
      <MenuItem icon={icons.bookmarks}>Bookmarks</MenuItem>
      <MenuItem icon={icons.download}>Downloads</MenuItem>
      <Line
        style={{
          backgroundColor: '#80808030',
          marginBottom: '5px',
          marginTop: '0px',
        }}
      />
      <MenuItem icon={icons.feedback}>Send Feedback</MenuItem>
      <MenuItem icon={icons.settings}>Settings</MenuItem>
      <MenuItem icon={icons.info}>About Dot</MenuItem>
    </StyledMenu>
  );
});
