import styled from 'styled-components';

export const Title = styled.h1`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  user-select: none;
`;

export const Subtitle = styled.h1`
  font-family: Roboto;
  font-size: 15px;
  font-weight: 400;
  opacity: 0.8;
  height: 60px;
  overflow-y: auto;
  white-space: normal;

  ::selection {
    background-color: #1a73e845;
  }
`;