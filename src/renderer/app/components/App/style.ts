import styled, { css } from 'styled-components';
import { transparency } from '~/renderer/constants';

export const Line = styled.div`
  background-color: #e5e5e5;
  height: 1px;
  width: 100%;
  z-index: 2;
  position: absolute;
  margin-top: 38px;
`;

export const Screenshot = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  flex: 1;
  filter: blur(4px);
  margin: -40px;
  position: relative;

  ${({ img }: { img: any }) => css`
    background-image: url(${img});
  `}
`;

export const StyledApp = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;
`;

