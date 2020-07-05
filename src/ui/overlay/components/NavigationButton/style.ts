import styled, { css } from "styled-components";

export const StyledNavigationButton = styled.div`
    display: flex;
    width: 32px;
    height: 32px;
    align-self: center;
    text-align: center;
    justify-content: center;
    border-radius: 3px;
    margin: 0 3px;
    transition: 0.2s box-shadow, 0.2s background-color;

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