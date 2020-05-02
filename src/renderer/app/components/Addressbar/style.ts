import styled from "styled-components";
import { StyledNavigationButton } from "../NavigationButton/style";

export const StyledAddressbar = styled.div`
    width: 100%;
    display: flex;
    height: 32px;
    align-self: center;
    box-shadow: 0 0 8px 0px #00000017;
    border: 1px solid #eaeaea;
    margin: 0 6px;
    border-radius: 3px;
    -webkit-app-region: no-drag;
    transition: 0.15s border, 0.25s padding;

    &:focus-within {
        border: 1px solid #c7c7c7;
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
    font-family: BlinkMacSystemFont, 'Inter';
    line-height: 18px;
    padding: 0 2px;
    padding-right: 6px;
`;