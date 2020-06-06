import styled, { css } from "styled-components";
import { StyledNavigationButton } from "../NavigationButton/style";

export const StyledAddressbar = styled.div`
    width: 100%;
    display: flex;
    height: 30px;
    align-self: center;
    border: 1px solid #e5e5e5;
    margin: 0 6px;
    border-radius: 3px;
    -webkit-app-region: no-drag;
    user-select: none;
    transition: 0.15s border, 0.25s padding;
    // box-shadow: 0 -0.1px 3.6px 0 rgba(0,0,0,.132), 0 0.3px 0.9px 0 rgba(0,0,0,.108);
    position: relative;
    overflow: hidden;

    &:hover {
        border: 1px solid #aeaeae;
    }

    &:focus-within {
        border-radius: 3px;
        border: 1px solid #1499ff !important;
        user-select: unset;
    }
`;

export const Input = styled.input`
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
    font-size: 16px;
    line-height: 16px;
    color: #303030;
    font-family: system-ui;
    padding: 0 2px;
    padding-right: 6px;
    padding-bottom: 1px;

    ::placeholder {
        color: transparent;
    }

    ${({ showSearchText, isFocused, searchWidth }: { showSearchText: boolean; isFocused: boolean; searchWidth: number }) => css`
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
`;