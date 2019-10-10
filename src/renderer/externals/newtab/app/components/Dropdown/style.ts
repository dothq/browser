import styled, { css } from 'styled-components';

export const StyledDropdown = styled.div`
  z-index: 9999;
  position: absolute;
  left: -1000px;
  border-radius: 4px;
  transition: 0.2s opacity, 0.2s transform;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.24);

  ${({
    x,
    y,
    width,
    visible,
    darkMode,
  }: {
    x: number;
    y: number;
    width: number;
    visible: boolean;
    darkMode: boolean;
  }) => css`
    left: ${x}% !important;
    top: ${y}px;
    width: ${width}px;
    opacity: ${visible == true ? 1 : 0};
    transform: ${visible == true ? 'translateY(0px)' : 'translateY(-35px)'};
    pointer-events: ${visible == true ? 'all' : 'none'};
    background-color: ${darkMode == false ? 'var(--accent-color)' : 'white'};
    --dropdown-theme: ${darkMode == false ? 'white' : 'black'};
    --dropdown-hover-theme: ${darkMode == false ? '#ffffff1f' : '#0000001f'};
  `}
`;

export const DropdownFamily = styled.ul`
  height: 100%;
  margin: 0px 0px 10px 0px;
  list-style-type: none;
  padding: 0px;
`;

export const DropdownItem = styled.li`
  padding: 0px 20px;
  height: 35px;
  line-height: 35px;
  font-family: Roboto;
  color: var(--dropdown-theme);
  cursor: pointer;
  user-select: none;
  border-radius: 4px;
  margin: 10px;
  padding-left: 10px;
  transition: 0.3s background-color;

  &:hover {
    background-color: var(--dropdown-hover-theme);
  }
`;

export const DropdownSeperator = styled.li`
  padding: 0px 20px;
  line-height: 35px;
  font-family: Roboto;
  color: var(--dropdown-theme);
  user-select: none;
  border-radius: 4px;
  margin: 14px 10px 10px 10px;
  padding-left: 10px;

  ${({ icon }: { icon: any }) => css`
    &::before {
      content: '';
      width: 35px;
      height: 35px;
      -webkit-transition: background-color 0.3s;
      transition: background-color 0.3s;
      opacity: 0.8;
      background-size: 25px;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 50px;
      background-image: url(${icon});
    }
  `}
`;
