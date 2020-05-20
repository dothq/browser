import styled, { css } from "styled-components";
import { StyledNavigationButton } from "../../NavigationButton/style";

export const StyledSearchIcon = styled(StyledNavigationButton)`
    height: 30px;
    margin: 0 2px;
    width: 34px;
    position: absolute;
    transition: 0.3s color;

    svg.feather.feather-lock {
        opacity: 0.7
    }

    svg.feather.feather-lock g rect {
        fill: black;
    }
    
    ${({ isNTP }: { isNTP: boolean }) => css`
        &:hover, &:active { background-color: ${isNTP ? "transparent" : ""}; }
    `};
`;