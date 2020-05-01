import styled from "styled-components";
import { TABBAR_HEIGHT } from "../../constants/window";

export const StyledTabs = styled.div`
    display: flex;
    width: 100%;
    height: ${TABBAR_HEIGHT}px;
    background-color: #f3f3f3; // TODO: Themes
    -webkit-app-region: drag;
    justify-content: flex-end;
`;