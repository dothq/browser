import styled from "styled-components";
import { StyledNavigationButton } from "../NavigationButton/style";

export const StyledAddressbar = styled.div`
    width: 100%;
    display: flex;
    height: 34px;
    align-self: center;
    border: 1px solid #d1d1d2;
    margin: 0 6px;
    border-radius: 3px;
    -webkit-app-region: no-drag;
    user-select: none;
    transition: 0.15s border, 0.25s padding;
    max-width: calc(1500px + 24px + 2 * 6px);

    &:focus-within {
        border: 1px solid #a7a7a7;
        user-select: unset;
    }
`;

export const SearchIcon = styled(StyledNavigationButton)`
    height: 30px;
    margin: 0 2px;
    width: 34px;
    color: #7C7C7C;
`;

export const Input = styled.input`
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
    font-size: 14px;
    letter-spacing: 0.2px;
    font-family: system-ui;
    padding: 0 2px;
    padding-right: 6px;

    ::placeholder {
        color: #7C7C7C;
    }
`;