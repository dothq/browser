import styled from "styled-components";
import { StyledNavigationButton } from "../NavigationButton/style";

export const StyledAddressbar = styled.div`
    width: 100%;
    display: flex;
    height: 32px;
    align-self: center;
    box-shadow: 0 0 4px 0px #00000017;
    border: 1px solid #eaeaea;
    margin: 0 6px;
    border-radius: 3px;
    -webkit-app-region: no-drag;
    user-select: none;
    transition: 0.15s border, 0.25s padding;

    &:focus-within {
        border: 1px solid #a7a7a7;
        user-select: unset;
    }
`;

export const SearchIcon = styled(StyledNavigationButton)`
    height: 26px;
    margin: 0 4px;
    width: 32px;
`;

export const Input = styled.input`
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
    font-size: 14px;
    letter-spacing: 0.2px;
    font-family: -apple-system,BlinkMacSystemFont,"Inter",system-ui;
    padding: 0 2px;
    padding-right: 6px;
`;