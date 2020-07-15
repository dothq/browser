import styled, { css } from "styled-components";
import { StyledNavigationButton } from "../NavigationButton/style";

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
    background-color: ${props => props.theme.omnibox.backgroundColor};
    border: ${props => props.theme.omnibox.border == undefined ? 1.5 : props.theme.omnibox.border.width}px solid ${props => props.theme.omnibox.border == undefined ? "transparent" : props.theme.omnibox.border.color};

    &:hover {
        background-color: ${props => props.theme.omnibox.hover.backgroundColor};
    }

    &:focus-within {
        border: ${props => props.theme.omnibox.focus.border.width}px solid ${props => props.theme.omnibox.focus.border.color};
        background-color: ${props => props.theme.omnibox.focus.backgroundColor};
    }
`;

export const Input = styled.input`
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
    font-size: ${props => props.theme.omnibox.textSize};
    color: ${props => props.theme.omnibox.textColor};
    font-family: ${
        props => props.theme.omnibox.font == "inherit" 
            ? props => props.theme.global.font == "default"
                ? "system-ui"
                : props => props.theme.global.font
            : props => props.theme.omnibox.font == "default"
                ? "system-ui"
                : props => props.theme.omnibox.font
    };
    padding: 0 2px;
    padding-right: 6px;
    padding-bottom: 1px;

    ::placeholder {
        opacity: ${props => props.theme.omnibox.placeholder.opacity};
        font-size: ${props => props.theme.omnibox.fontSize};
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
    display: flex;
    width: 38px;
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
    display: flex;
    color: ${props => props.theme.navigationButton.color};

    svg {
        min-width: 14px;
    }

    svg {
        opacity: 0.7
    }

    svg.feather.feather-lock g rect {
        fill: ${props => props.theme.navigationButton.color};
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
    mask-image: url(${require("../../../resources/icons/lock.svg").default});
    background-color: ${props => props.theme.omnibox.padlockBackgroundColor};
    -webkit-mask-size: cover;
    width: 8px;
    height: 11px;
`;