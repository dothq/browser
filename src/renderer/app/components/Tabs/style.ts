import styled, { css } from "styled-components";
import { TABBAR_HEIGHT } from "../../constants/window";
import { NavigationButton } from "../NavigationButton";

import dot from '../../store'

export const StyledTabs = styled.div`
    display: flex;
    width: 100%;
    height: ${TABBAR_HEIGHT}px;
    background-color: #fafafa; // TODO: Themes
    -webkit-app-region: drag;
    ${dot.confettiMode ? `
        position: absolute;
        bottom: 0;
    ` : ''};
`;

export const TabsContainer = styled.div`
    display: flex;
    padding: 0 4px;
    -webkit-app-region: no-drag;
    max-width: calc(100% - 200px);
    overflow-x: visible;
    margin-left: 2px;
    ${require("os").platform() == "darwin" ? "margin-left: 76px;" : ""}

    ::-webkit-scrollbar {
        // width: 0px;
        // background: transparent;
        // height: 0px;
    }
`;

export const AddTab = styled(NavigationButton).attrs(props => ({
    icon: 'plus',
    size: 18,
    onClick: props.onClick,
    iconStyle: { paddingTop: '3px' },
    style: { WebkitAppRegion: 'no-drag', marginLeft: '-1px', height: 'calc(43px - 7px)' }
}))`
    min-width: 33px;
    min-height: calc(43px - 7px);
    position: absolute;
    height: 33px;
    -webkit-app-region: no-drag;

    ${({ left }: { left: number }) => css`
        left: ${left}px;
    `};
`;