import styled from "styled-components";

export const StyledNavigationButtons = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    margin-left: 4px;
    flex: 1;
    -webkit-app-region: no-drag;
    display: relative;
`;

export const Separator = styled.div`
    display: flex;
    margin: 0 4px;
    height: calc(100% - 24px);
    width: 1px;
    background-color: ${props => props.theme.line.backgroundColor};
    align-self: center;
`;