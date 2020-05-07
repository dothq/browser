import styled from "styled-components";
import { StyledNavigationButton } from "../NavigationButton/style";

export const StyledAddressbar = styled.div`
    width: 100%;
    display: flex;
    height: 34px;
    align-self: center;
    border: 1px solid #e5e5e5;
    margin: 0 6px;
    border-radius: 3px;
    -webkit-app-region: no-drag;
    user-select: none;
    transition: 0.15s border, 0.25s padding;
    max-width: calc(1200px + 24px + 2 * 6px);
    box-shadow: 0 -0.1px 3.6px 0 rgba(0,0,0,.132), 0 0.3px 0.9px 0 rgba(0,0,0,.108);

    &:focus-within {
        border: 1px solid #1499ff;
        user-select: unset;
    }
`;

export const SearchIcon = styled(StyledNavigationButton)`
    height: 30px;
    margin: 0 2px;
    width: 34px;
    color: #303030;
`;

export const Input = styled.input`
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
        color: #7C7C7C;
    }
`;