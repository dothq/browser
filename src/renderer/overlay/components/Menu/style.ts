import styled, { css } from 'styled-components';
import { NAVIGATION_HEIGHT } from '../../../constants/window';

import { BLUE_1 } from '@dothq/colors';

export const StyledMenu = styled.div`
  margin-top: ${NAVIGATION_HEIGHT - 6}px;
  margin-left: 25%;
  margin-right: auto;
  max-width: calc(1200px + 24px + 2 * 6px);
  background-color: white;
  border-radius: 0 0 3px 3px;
  border-left: 1px solid ${BLUE_1} !important;
  border-right: 1px solid ${BLUE_1} !important;
  border-bottom: 1px solid ${BLUE_1} !important;
  position: relative;

  ${({ visible, left }: { visible: boolean; left: number }) => css`
    display: ${visible ? 'block' : 'none'};
    margin-left: ${left}px;
  `};
`