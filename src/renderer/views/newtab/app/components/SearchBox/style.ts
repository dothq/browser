import styled, { css, keyframes } from 'styled-components';
import { centerIcon } from '~/shared/mixins';
import { icons } from '~/renderer/views/app/constants/icons';

export const StyledSearchBox = styled.div`
  z-index: 2;
  background-color: white;
  border-radius: 50px;
  display: flex;
  flex-flow: column;
  overflow: hidden;
  min-height: 48px;
  transition: 0.4s height;
  margin: 0 auto 32px auto;
  width: 600px;
  border: var(--omnibox-border);

  ${({ isFixed }: { isFixed: boolean }) => css`
    position: ${isFixed == true ? 'fixed' : 'unset'};
    z-index: ${isFixed == true ? '9999999' : 'unset'};
    top: ${isFixed == true ? '20px' : 'unset'};
    margin-left: ${isFixed == true ? '300px' : 'auto'};
  `}
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  min-height: 48px;
`;

export const SearchIcon = styled.div`
  ${centerIcon()};
  height: 18px;
  min-width: 18px;
  margin-left: 16px;
  background-image: url(${icons.search});
  filter: var(--icon-filter);
`;

export const Input = styled.input`
  -webkit-flex: 1;
  -ms-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  color: var(--input-color);
  margin-left: 42px;
  margin-right: 16px;
  font-family: Roboto;
  padding-left: 4px;
  position: absolute;
  height: inherit;
  width: 540px;

  &::placeholder {
    color: darkgray;
    font-family: Roboto;
  }
`;

export const hiyaAutomation = keyframes`
  0% {
    margin-top: -16px;
    color: transparent;
  }
  25% {
    margin-top: 0px;
    color: darkgray;
  }
  30% {
    margin-top: 0px;
    color: darkgray;
  }
  40% {
    margin-top: 0px;
    color: darkgray;
  }
  50% {
    margin-top: 0px;
    color: darkgray;
  }
  75% {
    margin-top: 0px;
    color: darkgray;
  }
  100% {
    margin-top: 16px;
    color: transparent;
  }
`;

export const HiyaMessage = styled.p`
  position: absolute;
  margin-left: 47px;
  pointer-events: none;
  transition: 1s margin;
  margin-top: 40px;
  display: inline-block;
  overflow: hidden;
  min-height: 19px;
  max-height: 19px;
  animation: ${hiyaAutomation} 4s cubic-bezier(0.87, 0.01, 0, 1.07) 0s infinite;
  overflow-y: hidden;
`;
