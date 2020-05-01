import styled from "styled-components";
import { StyledNavigationButton } from "../NavigationButton/style";

export const StyledAddressbar = styled.div`
    width: 100%;
    display: flex;
    height: 32px;
    align-self: center;
    background-color: #f3f3f3;
    margin: 0 4px;
    border-radius: 3px;
`;

export const SearchIcon = styled(StyledNavigationButton)`
    height: 25px;
    margin: 0 4px;
    width: 32px;

    &:hover {
        background-color: #e6e6e6;
    }

    &:active {
        background-color: #dedede;
    }
`;

export const Input = styled.input`
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
    font-size: 14px;
    letter-spacing: 0.4px;
`;