import styled, { css } from 'styled-components';

export const StyledNavigationDrawerItem = styled.div`
  padding: 0 16px;
  margin-left: 32px;
  margin-right: 32px;
  display: flex;
  height: 42px;
  align-items: center;
  position: relative;
  cursor: pointer;
  border-radius: 3px;

  ${({ icon, selected }: { icon?: string; selected?: boolean }) => css`
  background-color: ${selected ? 'rgba(255, 255, 255, 0.15)' : 'none'};

  &:hover {
    background-color: rgba(255, 255, 255, ${selected ? 0.15 : 0.08});
    border-radius: 3px;
  }

  ${icon &&
    `
    padding-left: ${24 + 16 + 8}px;
    &:before {
      content: '';
      filter: invert(100%);
      opacity: 0.56;
      width: 25px;
      height: 25px;
      left: 16px;
      position: absolute;
      background-image: url(${icon});
    }
  `}
`}
`;
