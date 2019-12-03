import styled, { css } from 'styled-components';

export const StyledDrawer = styled.div`
  height: 100%;
  left: 0px;
  -webkit-transition: all 0.2s ease 0s;
  -webkit-transition: all 0.2s ease 0s;
  -webkit-transition: all 0.2s ease 0s;
  transition: all 0.2s ease 0s;
  padding: 25px 12px 12px 25px;
  position: fixed;
  z-index: 99999;

  ${({ visible }: { visible: boolean }) => css`
    width: ${visible == false ? '60px' : '280px'};
    box-shadow: ${visible == false
      ? 'none'
      : '20px 0px 0px 999999px #0000001a'};
    background-color: ${visible == false
      ? 'transparent'
      : 'rgb(255, 255, 255)'};
  `}

  * {
    margin-bottom: 5px;
  }
`;

export const DrawerSeperator = styled.div`
  margin-bottom: 15px;
`;
