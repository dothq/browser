import styled, { css } from "styled-components";

export const StyledBookmarksItem = styled.div`
    height: 26px;
    padding: 0 8px;
    border-radius: 26px;
    display: flex;
    margin: 0 2px;
    align-items: center;
    transition: 0.1s background-color;

    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }

    &:active {
        background-color: rgba(0, 0, 0, 0.10);
    }
`;

export const BookmarksIcon = styled.div`
    width: 16px;
    height: 16px;

    ${({ icon }: { icon: any }) => css`
        background-image: url(${icon});
        background-size: cover;
        background-repeat: no-repeat;
    `}
`;

export const BookmarksTitle = styled.div`
    font-size: 12px;
    color: #000;
    margin-left: 8px;

    max-width: 112px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;