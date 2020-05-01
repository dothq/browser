import styled from "styled-components";
import { TOOLBAR_HEIGHT } from "../../constants/window";

export const StyledNavigation = styled.div`
    display: flex;
    width: 100%;
    height: ${TOOLBAR_HEIGHT}px;
    background-color: #ffffff;
    -webkit-app-region: drag;
    box-shadow: inset 0px -1px #00000012;
`;