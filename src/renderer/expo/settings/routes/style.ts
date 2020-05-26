import styled, { css } from "styled-components";

export const Avatar = styled.div`
    margin-left: -2px;

    ${({ src, size, center }: { src: any; size?: number; center?: boolean }) => css`
        background-image: url(${src});
        background-size: cover;
        width: ${size}px;
        height: ${size}px;
        border-radius: ${size}px;
        margin: ${center ? "0 auto" : ""};
    `};
`;

export const Title = styled.div`
    font-size: 24px;
    font-weight: 600;
`;