import styled, { css } from 'styled-components';
import { caption, centerIcon } from '~/shared/mixins';

export const StyledBubble = styled.div`
  border-radius: 5px;
  margin-top: 8px;
  padding: 16px 8px;
  transition: 0.1s background-color;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &:hover {
    background-color: var(--bubble-hover);
  }

  ${({ disabled }: { disabled: boolean }) => css`
    pointer-events: ${disabled ? 'none' : 'inherit'};
    opacity: ${disabled ? 0.54 : 1};
  `};
`;

export const Icon = styled.div`
  opacity: 1;
  width: 56px;
  height: 56px;
  background-color: var(--bubble-icon-background);
  border-radius: 50%;
  margin-bottom: 16px;
  ${centerIcon(32)};

  ${({ isFavicon }: { isFavicon: boolean }) => {
    if(isFavicon == true) {
      return css`
        filter: none;
        background-color: var(--bubble-icon-background-if-favicon) !important;
      `;
    }
    else {
      return css`
        filter: var(--bubble-should-invert);
      `;
    }
  }};
`;

export const Title = styled.div`
  font-size: 13px;
  text-align: center;
  color: var(--general-title);
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;
