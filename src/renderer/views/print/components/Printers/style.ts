import styled, { css } from 'styled-components';

export const StyledPrinters = styled.div`
    border: 2px solid #E4E4E4;
    background-color: white;
    width: 440px;
    height: 153px;
    border-radius: 4px;
    padding: 6px 6px 0 6px;
    opacity: 0.8;
    user-select: none;
    overflow-y: scroll;
`;

export const Printer = styled.div`
    display: inline-flex;
    margin-bottom: 5px;
    border-radius: 2px;
    transition: 0.1s background-color, 0.1s color;
    height: 32.5px;
    min-height: 32.5px;
    max-height: 32.5px;
    width: -webkit-fill-available;

    &:hover {
        background-color: #ececec;
    }

    ${({ selected }: { selected: boolean }) => css`
        background-color: ${selected == true ? '#0072ff40' : ''} !important;
        color: ${selected == true ? '#0087ff' : ''};
    `}
`;