import styled, { css } from 'styled-components';

export const StyledSuggestion = styled.span`

  width: 100%;
  display: flex;
  height: 34px;
  align-self: center;
  margin: 0 6px;
  -webkit-app-region: no-drag;
  user-select: none;
  transition: 0.15s border, 0.25s padding;
  max-width: calc(1200px + 24px + 2 * 6px);
  position: relative;
  overflow: hidden;
`

export const SuggestionText = styled.span`
  border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
    color: #303030;
    font-family: system-ui;
    padding: 0 2px;
    padding-right: 6px;

    ::placeholder {
        color: transparent;
    }

    padding-left: 38px;
`