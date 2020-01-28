import styled, { css } from 'styled-components';
import { centerIcon } from '../../../../shared/mixins';

export const StyledApp = styled.div`
    display: block;
    transition: 0.4s opacity;
    background-color: white;
    border: 1px solid lightgray;
    border-radius: 4px;
    box-shadow: 1px 1px 6px 2px #00000017;
    font-family: Roboto;
    margin-left: -8px;
    margin-top: -8px;
    height: auto;

    ${({ visible }: { visible: boolean }) => css`
        opacity: ${visible ? 1 : 0};
    `}
`;

export const Category = styled.div`
  border-top: 1px solid lightgray;
  padding: 4px 0;
`;

export const MenuItem = styled.div`
  display: inline-flex;
  height: 20px;
  min-width: -webkit-fill-available;
  padding: 8px 14px 8px 12px;
  user-select: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.07)
  }

  ${({ disabled }: { disabled?: boolean }) => css`
    pointer-events: ${disabled == true ? 'none' : 'all'};
    opacity: ${disabled == true ? 0.4 : 1};
  `}
`;

export const Label = styled.div`
  font-size: 13px;
  color: black;
  margin-top: 1px;
  margin-left: 8px;

  ${({ hasIcon }: { hasIcon?: boolean }) => css`
    margin-left: ${hasIcon ? '12px' : '35px'};
  `}
`;

export const Hotkey = styled(Label)`
  opacity: 0.7;
  margin-top: 3px;
  margin-left: auto;
  font-size: 12px;
`;

export const StyledMenu = styled.div`
  margin-top: -1px;
  user-select: none;
`

export const Icon = styled.div`
  height: 24px;
  width: 24px;
  opacity: 0.8;
  margin-top: -3px;

  ${({ icon, size }: { icon: any; size: number }) => css`
    background-image: url(${icon});
    ${centerIcon(size)};
  `}
`;