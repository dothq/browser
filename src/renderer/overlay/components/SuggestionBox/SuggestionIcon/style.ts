import styled, { css } from "styled-components";
import { StyledNavigationButton } from "../../NavigationButton/style"; 

export const StyledSuggestionIcon = styled(StyledNavigationButton)`
    height: 30px;
    margin: 0 2px;
    position: absolute;
    transition: 0.3s color, 0.2s width;
    flex-direction: row;
    font-size: 12px;
    place-items: center;

    svg {
        min-width: 14px;
        padding-right: 0px;
    }

    &:hover, &:active { background-color: transparent }

    &:hover {
        &:after {
            opacity: 0;
        }
    }
`;