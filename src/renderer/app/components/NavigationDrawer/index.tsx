import * as React from 'react';
import store from '../../store';
import {
  StyledNavigationDrawer,
  MenuItems,
  Search,
  Input,
  Title,
  Back,
  Header,
} from './style';
import { NavigationDrawerItem } from './NavigationDrawerItem';

const onBack = (cb: (e?: React.MouseEvent<HTMLDivElement>) => void) => (
  e: React.MouseEvent<HTMLDivElement>,
) => {
  if (cb) {
    cb(e);
  }

  store.overlay.visible = false;
};

export const NavigationDrawer = ({
  children,
  title,

  search,
  onSearchInput,
  onBackClick,
}: {
  children?: any;
  title?: string;

  search?: boolean;
  onSearchInput?: (event: React.FormEvent<HTMLInputElement>) => void;
  onBackClick?: (e?: React.MouseEvent<HTMLDivElement>) => void;
}) => {
  return (
    <StyledNavigationDrawer>
      <Header>
        <Back onClick={onBack(onBackClick)} />
        <Title>{title}</Title>
      </Header>
      {search && (
        <Search>
          <Input
            placeholder={`${
              store.locale.lang.standard[0].search_placeholder
            } ${title}`}
            onInput={onSearchInput}
          />
        </Search>
      )}
      <MenuItems>{children}</MenuItems>
    </StyledNavigationDrawer>
  );
};

NavigationDrawer.Item = NavigationDrawerItem;
