import styled from "styled-components";

export const StyledView = styled.div`
    display: flex;
    width: 100%;
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    height: 100%;
    padding: 38px 0;
    flex-direction: column;
    overflow: auto;
    margin-bottom: 100px;
`;

export const Content = styled.div`
    height: -webkit-fill-available;
    max-width: 1052px;
    margin: 0px 48px;

    &:last-child {
        margin-bottom: 76px;
    }
`;

export const ViewHeader = styled.div`
    height: 32px;
    display: flex;
    align-items: center;
    width: 100%;
    text-align: center;
    line-height: 50px;
`;

export const ViewTitle = styled.div`
    font-size: 24px;
    font-weight: 500;
`;

export const ViewSubtitle = styled(ViewTitle)`
    margin-left: 12px;
    font-size: 22px;
    opacity: 0.5;
`;

export const ViewSearchContainer = styled.div`
    margin-left: auto;
    border: 1px solid #d8d8d8;
    display: flex;
    border-radius: 3px;
    position: relative;
    opacity: 0.5;
    transition: 0.2s opacity;

    svg {
        position: absolute;
        right: 0;
        width: 16px;
        height: 32px;
        margin: 0 8px;
    }

    &:focus-within {
        opacity: 1;
    }
`;

export const ViewSearch = styled.input`
    height: 32px;
    border: none;
    width: 232px;
    outline: none;
    font-size: 14px;
    padding: 0 10px;
    background-color: transparent;
    transition: 0.2s border;
    font-family: system-ui;

    &::placeholder {
        color: gray;
    }
`;