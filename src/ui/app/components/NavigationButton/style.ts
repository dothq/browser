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
    color: ${props => props.theme.navigationButton.color};

    ${({ size, disabled, visible }: { size?: number; disabled?: boolean; visible?: boolean }) => css`
        width: ${size}px;
        height: ${size}px;

        border-radius: ${props => props.theme.navigationButton.borderRadius};

        min-width: ${size}px;
        min-height: ${size}px;

        pointer-events: ${disabled ? 'none' : 'all'};
        opacity: ${disabled ? 0.5 : props => props.theme.navigationButton.opacity};
        display: ${visible ? 'flex' : 'none'};
    `};

    svg {
        align-self: center;
    }

    &:hover {
        background-color: ${props => props.theme.navigationButton.hover.backgroundColor};
    }

    &:active {
        background-color: ${props => props.theme.navigationButton.active.backgroundColor};
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
    border: 2px solid ${props => props.theme.navigationBar.backgroundColor};
    display: flex;
    align-items: center;
    justify-content: center;
`;