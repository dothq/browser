import styled, { css } from 'styled-components';

import { shadows, button } from '~/shared/mixins';

interface StyledButtonProps {
  background: string;
  foreground: string;
  type?: 'contained' | 'outlined';
  visible: boolean;
  icon?: any;
}

export const StyledButton = styled.div`
  min-width: 88px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px var(--button-border) solid;
  transition: background-color 0.3s;
  border-radius: 30px;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 10px;
  padding-right: 10px;
  margin-right: -9px;
  color: var(--button-text-color) !important;

  &:hover {
    background-color: var(--button-hover) !important;
  }

  ${({ background, foreground, type, visible, icon }: StyledButtonProps) => css`
    display: ${visible ? 'auto' : 'none'};
    color: ${foreground || '#fff'};
    background-color: ${type === 'outlined'
      ? 'transparent'
      : background || '#2196F3'};
    background-image: url(${icon})
  `};
`;

export const StyledLabel = styled.div`
  z-index: 1;
  font-weight: 300 !important;
  ${button()};
`;
