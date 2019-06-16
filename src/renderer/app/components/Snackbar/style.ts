import styled, { css } from 'styled-components';
import { shadows } from '../../../../shared/mixins/shadows';
import opacity from '../../../../shared/mixins/opacity';
import * as typography from '../../../../shared/mixins/typography';
import { popUp } from './keyframes';

export const Root = styled.div`
  height: 48px;
  width: 280px;
  box-shadow: ${shadows(6)};
  position: absolute;
  z-index: 9999;
  bottom: 16px
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50px;
  background-color: rgba(226, 226, 226, 1);
  color: rgba(33,33,33,1);
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

export const Image = styled.img`

`;

export const Content = styled.div`
  margin-left: 16px;
  flex: 1;
  ${typography.body2()};
  color: rgba(255, 255, 255, ${opacity.light.primaryText});
`;

export const Actions = styled.div`

`;