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
  transition: 0.3s background-color, opacity;
  border-radius: 30px;

  &:hover {
    background-color: #0000003d;
  }

  &:before {
    content: '';
    position: absolute;
    left: 0;
    width: 2px;
    height: 16px;
    background-color: white;
    transition: 0.2s opacity;
    ${({ selected }: { selected?: boolean }) => css`

      opacity: ${selected ? 1 : 0};

    `};

    &:hover {
        background-color: rgba(255, 255, 255, 0.12)
    }
  }
`;

