import styled from "styled-components";

export const StyledIconBar = styled.div`
    display: flex;
    height: 32px;
    margin: 36px 36px 0 36px;
`;

export const IconButton = styled.div`
    cursor: pointer;
    height: fit-content;
    width: fit-content;
    display: flex;

    &:hover {
        opacity: 0.8;
    }
`;

export const IBEnd = styled.div`
    display: flex;
    width: 100%;
    place-content: flex-end;
`;