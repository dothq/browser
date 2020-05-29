import styled, { css } from 'styled-components';
import { NAVIGATION_HEIGHT } from '../../../constants/window';
import dot from '../../store';

export const StyledSuggestionBox = styled.div`
  width: 100%;
  margin-top: ${NAVIGATION_HEIGHT - 6}px;
  margin-left: auto;
  margin-right: auto;
  max-width: calc(1200px + 24px + 2 * 6px);
  background-color: white;
  border-radius: 0 0 3px 3px;
  border-left: 1px solid #1499ff !important;
  border-right: 1px solid #1499ff !important;
  border-bottom: 1px solid #1499ff !important;
  position: relative;

  ${dot.suggestionBoxActivate == true ? "display: inherit" : "display: none"};
`