import styled, { css } from "styled-components";

export const StyledLargeCard = styled.a`
    width: 500px;
    height: 316px;

    display: flex;

    box-shadow: 0px 1px 22px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    margin: 26px;
    padding: 28px;

    color: transparent;

    transition: 0.4s box-shadow, 0.4s transform;

    &:hover {
        box-shadow: 0px 1px 44px rgba(0, 0, 0, 0.25);
        transform: scale(1.01)
    }

    ${({ background }: { background: any }) => css`
        background-image: linear-gradient(180.32deg, #ffffff00 0%, rgb(0, 0, 0) 100%), url(${background});
        background-size: cover;
        background-repeat: no-repeat;
    `};
`;

export const Headline = styled.div`
    font-family: DM Serif Display;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    color: #FFFFFF;
    display: flex;
    align-items: flex-end;
    height: 100%;
`;