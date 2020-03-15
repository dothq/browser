import styled, { css } from 'styled-components';
import { body2, centerIcon } from '~/shared/mixins';
import { ITheme } from '~/interfaces/theme';

export const Style = css`
  body {
    cursor: default;
    margin: 0;
    padding: 0;
    user-drag: none;
    ${body2()}
  }

  * {
    box-sizing: border-box;
  }

  ::selection {
    background-color: #1a73e845;
  }
`;

export const StyledApp = styled.div`
  height: 100vh;

  ${({ theme }: { theme: ITheme }) => css`
    background-color: ${theme['webui-newtab-background-color']};
  `}
`;

export const Icon = styled.div`
  ${({ theme, icon, size, centered }: { theme: ITheme; icon: any; size: number; centered: boolean }) => css`
    background-image: url(${icon});
    filter: ${theme["general-element"]};
    
    width: ${size}px;
    height: ${size}px;

    background-size: ${size}px;

    ${centered ? centerIcon() : ''}
  `}
`;