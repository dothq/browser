import styled, { css } from 'styled-components';
import { shadows } from '~/shared/mixins';

export const StyledMenu = styled.div`
  position: absolute;
  transition: 0.2s opacity, 0.2s margin-top;
  width: 250px;
  cursor: default;
  padding: 8px 0;
  z-index: 9999;
  box-shadow: ${shadows(8)};
  background-color: #303030;
  border-radius: 8px;
  font-family: Roboto;
  user-select: none;

  ${({ visible }: { visible: boolean }) => css`
    opacity: ${visible ? 1 : 0};
    pointer-events: ${visible ? 'auto' : 'none'};
    margin-top: ${visible ? 0 : -20}px;
  `}
`;