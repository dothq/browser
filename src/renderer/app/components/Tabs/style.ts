import styled from "styled-components";
import { TABBAR_HEIGHT } from "../../constants/window";
import { NavigationButton } from "../NavigationButton";

export const StyledTabs = styled.div`
    display: flex;
    width: 100%;
    height: ${TABBAR_HEIGHT}px;
    background-color: #e9e9e9; // TODO: Themes
    -webkit-app-region: drag;
`;

export const TabsContainer = styled.div`
    display: flex;
    padding: 0 4px;
    -webkit-app-region: no-drag;
    ${require("os").platform() == "darwin" ? "margin-left: 76px;" : ""}
    max-width: calc(100% - 200px);
    overflow-x: overlay;

    ::-webkit-scrollbar {
        width: 0px;
        background: transparent;
        height: 0px;
    }
`;

export const AddTab = styled(NavigationButton).attrs(props => ({
    icon: 'plus',
    size: 18,
    onClick: props.onClick,
    style: { height: 'calc(100% - 8px)', minWidth: '33px', minHeight: 'calc(100% - 8px)' },
    iconStyle: { paddingTop: '3px' }
}))``;