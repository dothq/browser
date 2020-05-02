import styled from "styled-components";

export const StyledNavigationButton = styled.div`
    display: flex;
    width: 32px;
    height: 32px;
    align-self: center;
    text-align: center;
    justify-content: center;
    border-radius: 3px;
    margin: 0 3px;
    transition: 0.2s box-shadow, 0.2s background-color;

    svg {
        align-self: center;
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }

    &:active {
        background-color: rgba(0, 0, 0, 0.10);
    }
`;