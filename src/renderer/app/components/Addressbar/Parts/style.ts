import styled, { css } from "styled-components";

export const StyledParts = styled.div`
    font-size: 16px;
    line-height: 16px;
    color: #303030;
    position: absolute;
    top: 7px;
    pointer-events: none;
    width: 944px;
    height: 100%;
    overflow: hidden;
    white-space: nowrap;

    ${({ visible, showSearchText, searchWidth }: { visible: boolean, showSearchText: boolean; searchWidth: number }) => css`
        display: ${visible ? "flex" : "none"};
        padding-left: ${showSearchText ? searchWidth : 38}px;
    `};
`;

export const Part = styled.div`
    ${({ opacity }: { opacity: number }) => css`
        opacity: ${opacity};
    `};
`