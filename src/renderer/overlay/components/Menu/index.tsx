import React from 'react';
import { observer } from 'mobx-react';

import { StyledMenu } from './style';

export const Menu = observer(({ store }: { store: any }) => (

   <StyledMenu ref={store.menuRef} visible={store.menuActivate} left={store.menuLeft}> hello
  </StyledMenu>
))