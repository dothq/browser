import styled, { css } from 'styled-components';

export const StyledApp = styled.div`
  margin: 0px;
  border-radius: 0 20px 20px 0;
  overflow: hidden;
  position: relative;
  transition: 0.2s opacity,0.2s margin-top;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

  ${({ visible }: { visible: boolean }) => css`
    opacity: ${visible ? 1 : 0};
    margin-top: ${visible ? 0 : 7}px;
    background-color: #fff;
  `}
`;

export const Title = styled.div`
  font-size: 16px;
`;

export const Subtitle = styled.div`
  font-size: 13px;
  opacity: 0.54;
  margin-top: 8px;
`;

export const Buttons = styled.div`
  display: flex;
  margin-top: 16px;
  float: right;
`;
