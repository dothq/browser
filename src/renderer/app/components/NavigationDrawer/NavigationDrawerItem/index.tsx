import * as React from 'react';
import { StyledNavigationDrawerItem } from './style';

export const NavigationDrawerItem = ({
  children,
  selected,
  onClick,
  style,
  icon,
}: {
  children: any;
  selected?: any;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  style?: any;
  icon?: any;
}) => {
  return (
    <StyledNavigationDrawerItem selected={selected} onClick={onClick} style={style} icon={icon}>
      {children}
    </StyledNavigationDrawerItem>
  );
};
