import styled, { css } from 'styled-components';
import { ITheme } from '~/interfaces/theme';

export const StyledSuggestions = styled.div`
  width: 100%;
  overflow: hidden;
  transition: height 0.3s cubic-bezier(1, 0.01, 0, 1.01);
`;

export const SuggestionsWrapper = styled.div`
  transition: 0.3s opacity;

  ${({ visible }: { visible: boolean }) => css`
    opacity: ${visible ? 1 : 0};
    pointer-events: ${visible ? 'all' : 'none'};
  `};
`;

export const SpotlightWrapper = styled.div`
  transition: 0.3s opacity;

  ${({ visible }: { visible: boolean }) => css`
    opacity: ${visible ? 1 : 0};
    pointer-events: ${visible ? 'all' : 'none'};
  `};
`;

export const Subheading = styled.div`
  font-size: 12px;
  padding: 8px;
  padding-left: 16px;
  opacity: 0.54;

  ${({ theme }: { theme: ITheme }) => css`
    background-color: ${theme['omnibox-subheading-background-color']};
    color: ${theme['omnibox-text-color']};
  `};
`;
