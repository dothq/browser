import styled, { css } from "styled-components";
import { StyledNavigationButton } from "../../../../app/components/NavigationButton/style"; // TODO move this to the Overlay react element, so im not spreading code across multiple react elements.

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
`;