import styled from "styled-components";
import { TABBAR_HEIGHT } from "../../constants/window";

export const StyledTabs = styled.div`
    display: flex;
    width: 100%;
    height: ${TABBAR_HEIGHT}px;
    background-color: #e9e9e9; // TODO: Themes
    -webkit-app-region: drag;
    justify-content: flex-end;
`;

export const TabsContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 0 4px;
    ${require("os").platform() == "darwin" ? "margin-left: 76px;" : ""}
`;