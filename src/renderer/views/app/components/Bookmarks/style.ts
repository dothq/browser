import styled, { css } from 'styled-components';

import { Section } from '../Overlay/style';
import { robotoRegular } from '~/shared/mixins/typography';

export const BookmarkSection = styled(Section)`
  padding: 8px 0px;
  margin-top: 48px;
`;

export const Dialog = styled.div`
  margin: 16px;
  padding: 16px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 8px;
  background: white;
`;

export const Sections = styled.div`
  margin-left: 300px;
  width: calc(100% - 300px);
  display: flex;
  flex-flow: column;
  align-items: center;
`;

interface InputProps {
  color: string;
  hasLabel: boolean;
  hasIcon: boolean;
  fontColor: string;
}

export const Input = styled.input`
  width: 100%;
  height: 48px;
  font-size: 16px;
  color: #000;
  padding-left: 12px;
  border: none;
  outline: none;
  background-color: transparent;
  user-select: auto;
  ${robotoRegular()};
  ${({ color, hasLabel, hasIcon, fontColor }: InputProps) => css`
    padding-top: ${hasLabel ? 12 : 0}px;
    padding-right: ${hasIcon ? 48 : 12}px;
    -webkit-text-fill-color: transparent;
    text-shadow: 0px 0px 0px ${fontColor};

    color: ${color};

    &::placeholder {
      text-shadow: 0px 0px 0px ${fontColor};
      opacity: 0.4;
    }
    &[type='number']::-webkit-inner-spin-button,
    &[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }

  `}
`;
