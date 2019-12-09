import styled from 'styled-components';

export const StyledPrinters = styled.div`
    border: 2px solid #E4E4E4;
    background-color: white;
    width: 440px;
    height: 150px;
    border-radius: 4px;
    display: grid;
    padding: 6px 6px 0 6px;
    opacity: 0.8;
    user-select: none;
    overflow-y: scroll;
`;

export const Printer = styled.div`
    display: inline-flex;
    margin-bottom: 5px;
    border-radius: 2px;
    transition: 0.1s background-color;

    &:hover {
        background-color: #ececec;
    }
`;