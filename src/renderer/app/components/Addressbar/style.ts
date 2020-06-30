import styled, { css } from "styled-components";
import { BLUE_1 } from "@dothq/colors";

// Styled Navigation Button

const StyledNavigationButton = styled.div`
    display: flex;
    width: 32px;
    height: 32px;
    align-self: center;
    text-align: center;
    justify-content: center;
    border-radius: 3px;
    margin: 0 3px;
    transition: 0.1s box-shadow, 0.1s background-color;
    position: relative;

    ${({ size, disabled }: { size?: number; disabled?: boolean }) => css`
        width: ${size}px;
        height: ${size}px;

        min-width: ${size}px;
        min-height: ${size}px;

        pointer-events: ${disabled ? 'none' : 'all'};
        opacity: ${disabled ? 0.5 : 0.9};
    `};

    svg {
        align-self: center;
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }

    &:active {
        background-color: rgba(0, 0, 0, 0.10);
    }
`;

// Addressbar

export const StyledAddressbar = styled.div`
    width: 100%;
    display: flex;
    height: 30px;
    align-self: center;
    -webkit-app-region: no-drag;
    user-select: none;
    transition: 0.1s background-color;
    // box-shadow: 0 -0.1px 3.6px 0 rgba(0,0,0,.132), 0 0.3px 0.9px 0 rgba(0,0,0,.108);
    position: relative;
    overflow: hidden;
    margin: 0 4px;
    border-radius: 32px;
    background-color: #f1f3f4;
    border: 1.5px solid transparent;

    &:hover {
        background-color: #e9ebec;
    }

    &:focus-within {
        border: 1.5px solid #b9d5f8;
        background-color: #fff;
    }
`;

export const Input = styled.input`
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
    font-size: 14px;
    color: #303030;
    font-family: system-ui;
    padding: 0 2px;
    padding-right: 6px;
    padding-bottom: 1px;

    ::placeholder {
        opacity: 0.75;
        font-size: 14px;
    }

    ${({ showSearchText, isFocused, searchWidth }: { showSearchText?: boolean; isFocused?: boolean; searchWidth?: number }) => css`
        padding-left: ${showSearchText ? searchWidth : 38}px;
    `};
`;

export const InputPlaceholder = styled.div`
    font-size: 14px;
    line-height: 16px;
    color: #7C7C7C;
    position: absolute;
    top: 7px;
    pointer-events: none;
    width: 100%;
    padding-left: 38px;
    transition: padding-left 0.3s cubic-bezier(0.1, 0.9, 0.2, 1), opacity 0.2s 0.04s;

    ${({ focused }: { focused: boolean }) => css`
        padding-left: ${!focused ? 'calc(100% / 2 - 73px - 17px)' : '38px'};
    `};

    display: none;
`;

// Faviorite Icon

export const StyledFavouriteIcon = styled(StyledNavigationButton)`
    height: 28px;
    margin: 0 1px;
    border-radius: 32px;
    width: 36px;

    :hover < & {
        background-color: #f1f3f4;
        border: 1.5px solid transparent;
    }
`;

// Search Icon

export const StyledSearchIcon = styled(StyledNavigationButton)`
    height: 28px;
    margin: 0 1px;
    position: absolute;
    transition: 0.3s color, 0.2s width;
    flex-direction: row;
    font-size: 12px;
    place-items: center;
    border-radius: 32px;

    svg {
        min-width: 14px;
    }

    svg {
        opacity: 0.7
    }

    svg.feather.feather-lock g rect {
        fill: black;
    }
    
    ${({ isNTP, showSearchText, isFocused, searchWidth }: { isNTP: boolean; showSearchText: boolean; isFocused: boolean; searchWidth: number; }) => css`
        &:hover, &:active { background-color: ${isNTP || isFocused ? "transparent" : ""}; }

        &:hover {
            &:after {
                opacity: ${isFocused ? 1 : 0};
            }
        }

        width: ${showSearchText ? searchWidth : '34'}px;

        svg {
            padding-right: ${showSearchText ? '8px' : '0px'};
        }

        &:after {
            content: ${showSearchText ? "''" : ""};
            position: absolute;
            right: 0;
            height: 18px;
            width: 1px;
            background-color: #d7d7d7;
            transition: 0.2s opacity;
        }
    `};
`;

export const SearchIconText = styled.span`
    overflow: hidden;
    white-space: nowrap;
    transition: 0.2s width, 0.1s padding-left 0.3s, 0.2s opacity;

    ${({ visible, textWidth }: { visible: boolean; textWidth: number }) => css`
        width: ${visible ? textWidth : 0}px;
        opacity: ${visible ? 1 : 0};
    `};
`;

// Parts

export const StyledParts = styled.div`
    font-size: 16px;
    line-height: 16px;
    color: #303030;
    position: absolute;
    top: 7px;
    pointer-events: none;
    width: 944px;
    height: 100%;
    overflow: hidden;
    white-space: nowrap;

    ${({ visible, showSearchText, searchWidth }: { visible: boolean, showSearchText: boolean; searchWidth: number }) => css`
        display: ${visible ? "flex" : "none"};
        padding-left: ${showSearchText ? searchWidth : 38}px;
    `};
`;

export const Part = styled.div`
    ${({ opacity }: { opacity: number }) => css`
        opacity: ${opacity};
    `};
`

export const PadlockIcon = styled.div`
    mask-image: url(${require("../../../../resources/icons/lock.svg").default});
    background-color: #5F6368;
    -webkit-mask-size: cover;
    width: 8px;
    height: 11px;
`;