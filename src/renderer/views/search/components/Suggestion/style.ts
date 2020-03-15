import styled, { css } from 'styled-components';
import { transparency } from '~/renderer/constants';
import { body2, centerIcon } from '~/shared/mixins';
import { ITheme } from '~/interfaces/theme';

export const StyledSuggestion = styled.div`
  width: 100%;
  height: 38px;
  min-height: 38px;
  display: flex;
  position: relative;
  align-items: center;
  overflow: hidden;
  ${({
    selected,
    hovered,
    theme
  }: {
    selected: boolean;
    hovered: boolean;
    theme: ITheme
  }) => {
    let backgroundColor = 'transparent';
    if (selected) {
      backgroundColor = theme["omnibox-suggestion-selected"]
    } else if (hovered) {
      backgroundColor = theme["omnibox-suggestion-hover"]
    }
    return css`
      background-color: ${backgroundColor};
    `;
  }};
`;

export const PrimaryText = styled.div`
  ${body2()};
  margin-left: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 13px;
  opacity: ${transparency.text.high};
  user-select: none;

  ${({ theme }: { theme: ITheme }) => css`
    color: ${theme["omnibox-text-color"]};
  `};
`;

export const SecondaryText = styled.div`
  ${body2()};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 16px;
  font-size: 13px;
  opacity: ${transparency.text.medium};
  user-select: none;

  ${({ theme }: { theme: ITheme }) => css`
    color: ${theme["omnibox-text-color"]};
  `};
`;

export const Icon = styled.div`
  margin-left: 16px;
  width: 16px;
  min-width: 16px;
  height: 16px;
  ${centerIcon()};

  ${({ theme }: { theme: ITheme }) => css`
    filter: ${theme["general-element"]};
  `};
`;

export const Dash = styled.div`
  margin-left: 4px;
  margin-right: 4px;
  opacity: ${transparency.text.medium};

  ${({ theme }: { theme: ITheme }) => css`
    color: ${theme["omnibox-text-color"]};
  `};
`;
