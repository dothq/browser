import styled, { css } from "styled-components";

export const StyledIconButton = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.15s background-color;

    svg {
        stroke: #232323;
        transition: 0.1s stroke;
    }

    ${({ noFill }: { noFill?: boolean }) => css`
        &:hover {
            background-color: ${noFill ? '' : 'rgba(0, 0, 0, 0.05)'};

            svg {
                stroke: ${noFill ? '#00000070' : ''};
            }

        }

        &:active {
            background-color: ${noFill ? '' : 'rgba(0, 0, 0, 0.10)'};

            svg {
                stroke: ${noFill ? '#000000' : ''};
            }
        }
    `};
`;