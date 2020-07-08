import styled from "styled-components";
import { TOOLBAR_HEIGHT } from "../../../constants/window";

export const StyledNavigation = styled.div`
    display: flex;
    width: 100%;
    height: ${TOOLBAR_HEIGHT - 1}px;
    background-color: ${props => props.theme.navigationBar.backgroundColor};
    position: absolute;
`;