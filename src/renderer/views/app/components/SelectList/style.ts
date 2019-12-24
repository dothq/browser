import styled, { css } from "styled-components";
import { centerIcon } from "~/shared/mixins";

const ITEM_HEIGHT = 36;

export const StyledSelect = styled.div`
    background-color: var(--select-list-background);
    width: 250px;
    height: ${ITEM_HEIGHT}px;
    cursor: pointer;
    box-shadow: 5px 5px 33px 0px rgba(0,0,0,0.21);

    ${({ isOpen }: { isOpen?: boolean }) => css`
        border-radius: ${isOpen ? '5px 5px 0px 0px' : '5px'};
    `};
`;

export const SelectItems = styled.div`
    border-radius: 5px;
    width: 250px;
    cursor: default;
    transition: 0.1s all;
    position: relative;
    z-index: 999999999 !important;
    background-color: var(--select-list-items-color);
    box-shadow: 5px 5px 33px 0px rgba(0,0,0,0.21);
    padding: 8px 0;

    ${({ visible }: { visible: boolean }) => css`
        border-radius: ${visible ? '0px 0px 5px 5px' : '5px'};
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
    color: var(--select-list-items-text-color);
    display: flex;
    padding-left: 20px;
    line-height: ${ITEM_HEIGHT}px;
`;

export const SelectContainer = styled.div`
    vertical-align: middle;
    width: 100%;
    height: ${ITEM_HEIGHT}px;
    display: table;
    border-radius: 5px;
    transition: 0.3s background-color;

    ${({ canBeHovered, isOpen }: { canBeHovered?: boolean; isOpen?: boolean }) => css`
        &:hover {
            background-color: var(--select-list-item-hover);
        }
    `};
`;

export const Icon = styled.div`
  width: 36px;
  height: ${ITEM_HEIGHT}px;
  position: absolute;
  opacity: 0.54;
  overflow: hidden;
  margin-left: 210px;
  border-radius: 50px;
  ${centerIcon(24)};
  transition: 0.3s transform;
  filter: var(--select-list-icon-filter);

  ${({ src, white, isOpen }: { src: any; white: boolean; isOpen: boolean }) => css`
    background-image: url(${src});
    transform: ${isOpen ? 'rotate(180deg)' : ''};
  `}
`;

export const ItemIcon = styled.div`
  height: ${ITEM_HEIGHT}px;
  width: 24px;
  opacity: 0.6;
  margin-right: 16px;
  filter: var(--general-element);
  ${centerIcon(20)};

  ${({ src }: { src: any }) => css`
    background-image: url(${src});
  `}
`;
