import styled, { css } from 'styled-components';
import { shadows } from '../../../../../shared/mixins/shadows';
import { popUp } from './keyframes';

export const Root = styled.div`
  height: 48px;
  width: 280px;
  box-shadow: 5px 5px 33px 10px rgba(0,0,0,0.21);
  position: absolute;
  z-index: 9999;
  bottom: 16px
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50px;
  background-color: var(--snackbar-background);
  color: var(--snackbar-color);
  will-change: transition, bottom;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-bottom: -100px
  animation: ${popUp} 100s ease-in-out 1.2s forwards;

  ${({ visible }: { visible: boolean }) => css`
    opacity: ${visible ? 1 : 0};
  `};
`;

export const Image = styled.img``;

export const Content = styled.div`
  margin-left: 16px;
  flex: 1;
  color: rgba(255, 255, 255, 0.6);
`;

export const Actions = styled.div``;
