import styled from "styled-components";

export const StyledFakeSearch = styled.div`
    height: 50px;
    width: 824px;
    box-shadow: 0 3.2px 7.2px 0 rgba(0,0,0,.132), 0 0.6px 1.8px 0 rgba(0,0,0,.108);
    background-color: white;
    border-radius: 6px;
    margin: 0 auto;
    margin-top: 88px;
    display: flex;
`;

export const FakeInput = styled.input`
    height: 50px;
    width: 100%;
    padding-left: 18px;
    font-family: PT Serif;
    color: #323232;
    border: none;
    background-color: transparent;
    outline: none;
    font-size: 16px;

    &:placeholder {
        color: #323232;
    }
`;