import styled, { css } from "styled-components";

export const StyledSidebar = styled.div`
    width: 56px;
    height: 100%;
    box-shadow: 1px 0 #0000000d;
    display: flex;
`;

export const SidebarContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const SidebarItem = styled.div`
    width: 100%;
    justify-content: center;
    display: flex;
    height: 56px;
    place-items: center;
    margin: 1px 0;

    ${({ selected }: { selected: boolean }) => css`
        svg {
            transition: 0.1s stroke;
            stroke: ${selected ? '#2196F3 !important' : '#8c8c8c'};
        }

        &:hover {
            svg {
                stroke: #333333
            }
        }
    `};
`;