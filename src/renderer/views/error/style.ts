import styled, { keyframes } from 'styled-components';

const errorAnimation = keyframes`
    20%, 30% {
        width: 20px;
        box-shadow: inset 0px -30px white;
    }

    40%, 50%, 60%, 70%, 80% {
        box-shadow: inset 0px -30px #ffffff00;
    }

    90%, 100% {
        box-shadow: inset 0px -30px #ffffff00;
        width: 80px;
    }
`;

export const ErrorIcon = styled.div`
    height: 80px;
    background-color: #1f1f1f;
    border-radius: 42px;
    margin: 0 auto;
    animation: ${errorAnimation} 3s infinite 0s alternate;
    animation-timing-function: cubic-bezier(0.74, 0.01, 0, 1.04);

    width: 20px;
    box-shadow: inset 0px -30px white;

    &:after {
        content: ' ';
        height: 20px;
        width: 20px;
        background-color: #212121;
        position: absolute;
        left: 247px;
        top: 92px;
        border-radius: 12px;
    }
`;

export const Title = styled.h1`
    text-align: center;
    opacity: 0.8;
    font-size: 2rem;
    font-weight: 500;
    font-family: 'Google Sans';
`;

export const Subtitle = styled.h1`
    text-align: center;
    opacity: 0.8;
    font-size: 18px;
    font-weight: 300;
    margin-top: -16px;
`;
