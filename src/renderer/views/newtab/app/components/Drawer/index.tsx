import * as React from 'react';
import { icons } from '../../../../../constants/icons';
import { StyledDrawer, DrawerSeperator } from './style';
import { IronIcon } from '../../style';

export const Drawer = ({
  visible,
  children,
}: {
  visible: boolean;
  children: any[];
}) => {
  return <StyledDrawer visible={visible}>{children}</StyledDrawer>;
};
