import styled from "styled-components";
import { TABBAR_HEIGHT } from "../../constants/window";

export const StyledTabs = styled.div`
    display: flex;
    width: 100%;
    height: ${TABBAR_HEIGHT}px;
    background-color: #e2e2e2; // TODO: Themes
    -webkit-app-region: drag;
    justify-content: flex-end;
`;

export const TabsContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 0 4px;
`;