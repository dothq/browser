import styled, { css } from "styled-components";

import dot from '../../store';

export const StyledNavigationButton = styled.div`
    display: flex;
    width: 32px;
    height: 32px;
    align-self: center;
    text-align: center;
    justify-content: center;
    border-radius: 3px;
    margin: 0 3px;
    transition: 0.1s box-shadow, 0.1s background-color;
    position: relative;

    ${({ size, disabled }: { size?: number; disabled?: boolean }) => css`
        width: ${size}px;
        height: ${size}px;

        min-width: ${size}px;
        min-height: ${size}px;

        pointer-events: ${disabled ? 'none' : 'all'};
        opacity: ${disabled ? 0.5 : 0.9};
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
    width: 14px;
    height: 14px;
    background-color: #0070f3;
    color: white;
    font-size: 9.5px;
    position: absolute;
    border-radius: 100px;
    right: 0;
    border: 2px solid white;
`;