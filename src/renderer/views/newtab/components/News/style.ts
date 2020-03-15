import styled from 'styled-components';

export const StyledNews = styled.div`
    padding-top: 56px;
    max-width: 1000px;
    margin: 0 auto;
    padding-bottom: 56px;
`;

export const Articles = styled.div`

`;

export const Spinner = styled.div`
    margin: auto;
    font-size: 10px;
    color: transparent;
    height: 32px;
    width: 32px;
    border: 4px solid #0069ff;
    border-right-color: transparent;
    border-radius: 50%;
    animation: spin;
    animation-duration: .6s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    box-sizing: border-box;
    margin-top: 56px;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(1turn);
        }
    }
`;