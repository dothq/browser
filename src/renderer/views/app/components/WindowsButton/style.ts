import styled, { css } from 'styled-components';

import { centerIcon } from '~/shared/mixins';
import { ITheme } from '~/interfaces/theme';

interface ButtonProps {
  icon: string;
  isClose?: boolean;
  visible?: boolean;
}

export const Button = styled.div`
  height: 100%;
  width: 45px;
  min-width: 45px;
  position: relative;
  transition: 0.2s background-color;
  -webkit-app-region: no-drag;
  &:first-child {
    margin-right: 0;
  }
  &:hover {
    background-color: ${({ isClose }: ButtonProps) =>
      !isClose ? 'rgba(196, 196, 196, 0.4)' : '#e81123'};
  }

  ${({ visible }: ButtonProps) => css`
    display: ${visible ? 'auto' : 'none'};
  `};
`;

interface IconProps {
  icon: string;
  isClose?: boolean;
  isDark?: boolean;
  theme?: ITheme;
}

export const Icon = styled.div`
  width: 100%;
  height: 100%;
  transition: 0.2s filter;
  ${centerIcon(11)};
  
  ${({ icon, isClose, isDark, theme }: IconProps) => css`
    background-image: url(${icon});
    filter: ${theme['windows-controls-color']};

    &:hover {
      filter: ${isClose && 'invert(100%)'};
    }
  `};
`;
