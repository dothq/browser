import styled, { css } from "styled-components";

import dot from '../../store';

export const StyledNavigationButton = styled.div`
    width: 32px;
    height: 32px;
    align-self: center;
    text-align: center;
    justify-content: center;
    margin: 0 1px;
    transition: 0.1s box-shadow, 0.1s background-color;
    position: relative;

    ${({ size, disabled, visible }: { size?: number; disabled?: boolean; visible?: boolean }) => css`
        width: ${size}px;
        height: ${size}px;

        border-radius: 100%;

        min-width: ${size}px;
        min-height: ${size}px;

        pointer-events: ${disabled ? 'none' : 'all'};
        opacity: ${disabled ? 0.5 : 0.9};
        display: ${visible ? 'flex' : 'none'};
    `};

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

export const Badge = styled.div`
    width: 16px;
    height: 15px;
    background-color: #0070f3;
    color: white;
    font-size: 8.6px;
    position: absolute;
    border-radius: 100px;
    right: 0;
    border: 2px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
`;