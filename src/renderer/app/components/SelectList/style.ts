import styled, { css } from "styled-components";
import { centerIcon } from "~/shared/mixins";

export const StyledSelect = styled.div`
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.1);
    width: 250px;
    height: 36px;
    cursor: pointer;
`;

export const SelectItems = styled.div`
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.1);
    width: 250px;
    cursor: pointer;
    transition: 0.1s all;
    position: relative;
    z-index: 999999999 !important;
    background-color: #3f3f3f;

    ${({ visible }: { visible: boolean }) => css`
        opacity: ${visible ? 1 : 0};
        pointer-events: ${visible ? 'auto' : 'none'};
    `}
`;

export const Selection = styled.div`
    cursor: pointer;
`;

export const SelectOption = styled.div`
    font-family: Roboto;
    font-weight: 400;
    vertical-align: middle;
    font-size: 13px;
    pointer-events: none;
    color: rgb(255, 255, 255);
    display: table-cell;
    padding-left: 20px;
`;

export const Container = styled.div`
    vertical-align: middle;
    width: 100%;
    height: 36px;
    display: table;
    border-radius: 5px;
    transition: 0.3s background-color;

    ${({ canBeHovered, isOpen }: { canBeHovered?: boolean; isOpen?: boolean }) => css`
        &:hover {
            background-color: rgba(213,213,213,0.06);
        }
    `};
`;

export const Icon = styled.div`
  width: 36px;
  height: 36px;
  position: absolute;
  opacity: 0.54;
  overflow: hidden;
  margin-left: 210px;
  border-radius: 50px;
  ${centerIcon(24)};
  transition: 0.3s transform;

  ${({ src, white, isOpen }: { src: any; white: boolean; isOpen: boolean }) => css`
    background-image: url(${src});
    filter: invert(${white ? '100%' : '0%'});
    transform: ${isOpen ? 'rotate(180deg)' : ''};
  `}
`;