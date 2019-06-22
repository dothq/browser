import * as React from 'react';

import Ripple from '../Ripple';
import { StyledButton, StyledLabel } from './styles';

interface Props {
  background?: string;
  foreground?: string;
  type?: 'contained' | 'outlined';
  children?: any;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  style?: any;
  visible?: any;
}

export const Button = ({
  background,
  foreground,
  type,
  onClick,
  children,
  style,
  visible,
}: Props) => (
  <StyledButton
    background={background}
    foreground={foreground}
    type={type}
    onClick={onClick}
    style={style}
    visible={visible}
  >
    <StyledLabel>{children}</StyledLabel>
    <Ripple style={{ display: 'none' }} color={foreground || '#fff'} />
  </StyledButton>
);
