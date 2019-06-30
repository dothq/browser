import styled, { css } from 'styled-components';
import { centerIcon } from '~/shared/mixins';
import { icons } from '../../constants';

export const StyledSearchBox = styled.div`
  z-index: 2;
  background-color: #fff;
  display: flex;
  flex-flow: column;
  overflow: hidden;
  min-height: 44px;
  width: 100%;
  border-top: 1px #e5e5e5 solid
  transition: 0.5 opacity;

  ${({ visible }: { visible: boolean }) => css`
    opacity: ${visible ? 0 : 1};
  `};
`;

export const SearchIcon = styled.div`
  ${centerIcon()};
  background-image: url(${icons.search});
  height: 18px;
  min-width: 18px;
  margin-left: 16px;
  opacity: 0.6;
`;

export const Input = styled.input`
  height: 100%;
  flex: 1;
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  color: #000;
  font-size: 16px;
  margin-left: 12px;
  margin-right: 16px;
  font-family: Roboto

  &::placeholder {
    color: #b8b8b8;
    font-family: Roboto
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
  min-height: 44px;
  width: 86.9%
  margin: 0 auto;
`;
