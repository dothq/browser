import * as React from 'react';

import { Button, Icon } from './style';

interface Props {
  icon: string;
  isClose?: boolean;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  isDark?: boolean;
  visible?: boolean;
}

export const WindowsButton = ({ icon, onClick, isClose, isDark, visible }: Props) => (
  <Button visible={visible} isClose={isClose} icon={icon} onClick={onClick}>
    <Icon isDark={isDark} isClose={isClose} icon={icon} />
  </Button>
);
