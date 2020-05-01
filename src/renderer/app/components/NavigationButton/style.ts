import styled from "styled-components";

export const StyledNavigationButton = styled.div`
    display: flex;
    width: 36px;
    height: 32px;
    align-self: center;
    text-align: center;
    justify-content: center;
    border-radius: 3px;
    margin: 0 2px;
    transition: 0.2s box-shadow, 0.2s background-color;

    svg {
        align-self: center;
    }

    &:hover {
        background-color: #f3f3f3;
    }

    &:active {
        background-color: #e8e8e8;
    }
`;