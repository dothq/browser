import styled, { css } from 'styled-components';

export const StyledError = styled.div`
    max-width: 658px;
    height: 100%;
    display: flex;
    width: 100%;
    margin: 0 auto;
    padding-top: 14vh;
    flex-direction: column;
`;

export const Emoji = styled.div`
    width: 64px;
    height: 64px;
    margin: 0 auto;

    ${({ src }: { src: any }) => css`
        background-image: url(${src});
        background-size: cover;
    `};
`;

export const Heading = styled.div`
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    color: #000000;
    margin-top: 28px;
    margin-bottom: 8px;
`;

export const Summary = styled.div`
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    color: #000000;
    margin-bottom: 14px;

    b {
        font-weight: 600;
    }
`;

export const Code = styled.div`
    font-weight: 600;
    font-size: 10px;
    line-height: 11px;
    text-align: center;
    color: #A2A2A2;
    margin-bottom: 32px;
`;