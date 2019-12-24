import styled, { css } from 'styled-components';
import { TOOLBAR_HEIGHT } from '../../constants';

export const Buttons = styled.div`
  display: flex;
  position: absolute;
  height: ${TOOLBAR_HEIGHT}px;
  right: 0;
  top: 0;
  z-index: 9999;
  transition: 0.3s margin-top;
  transition-delay: 0.2s;

  ${({ isHTMLFullscreen }: { isHTMLFullscreen: boolean }) => css`
    margin-top: ${isHTMLFullscreen ? -TOOLBAR_HEIGHT : 0}px;
  `};
`;
