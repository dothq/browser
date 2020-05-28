import styled, { css } from 'styled-components';
import { NAVIGATION_HEIGHT } from '../../../constants/window';

export const StyledSuggestionBox = styled.div`
  margin-top: ${NAVIGATION_HEIGHT - 6}px;
  margin-left: 125px;
  margin-right: 132px;
  background-color: white;
  border-radius: 0 0 3px 3px;
  border-left: 1px solid #1499ff !important;
  border-right: 1px solid #1499ff !important;
  border-bottom: 1px solid #1499ff !important;
`