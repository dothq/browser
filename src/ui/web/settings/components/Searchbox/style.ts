import styled from "styled-components";

export const StyledSearchbox = styled.div`
    height: 50px;
    width: 780px;
    background-color: #F1F1F1;
    border-radius: 8px;
    margin: 0 auto;
    display: flex;

    svg {
        display: flex;
        align-self: center;
        padding: 0 14px;
    }
`;

export const Input = styled.input`
    background: none;
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    font-family: system-ui;
    font-size: 16.5px;
    color: black;

    &::placeholder {
        color: #5D5D5D;
    }
`;