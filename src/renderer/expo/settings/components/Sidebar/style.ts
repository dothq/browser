import styled, { css } from "styled-components";

export const StyledSidebar = styled.div`
    width: 72px;
    min-width: 72px;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    box-shadow: 0 6.4px 14.4px 0 rgba(0,0,0,.132), 0 1.2px 3.6px 0 rgba(0,0,0,.108);
`;

export const SidebarContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    ${({ isEnding }: { isEnding?: boolean }) => css`
        height: ${isEnding ? '100%' : ''};
        justify-content: ${isEnding ? 'flex-end' : ''};
    `};
`;

export const SidebarItem = styled.div`
    width: 100%;
    justify-content: center;
    display: flex;
    height: 56px;
    place-items: center;
    margin: 1px 0;
    position: relative;

    ${({ selected }: { selected: boolean }) => css`
        svg {
            transition: 0.1s stroke;
            stroke: ${selected ? 'rgb(63, 154, 248) !important' : '#8c8c8c'};
        }

        &:before {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            border-left: ${selected ? '4.5px solid rgb(63, 154, 248) !important' : '0px solid transparent'};
            transition: 0.2s border-left;
        }

        &:hover {
            &:before {
                border-left: 5px solid #040404b8;
            }

            svg {
                stroke: #333333;
            }
        }
    `};
`;

export const Avatar = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50px;
    margin-left: -2px;

    ${({ src }: { src: any }) => css`
        background-image: url(${src});
        background-size: cover;
    `};
`;