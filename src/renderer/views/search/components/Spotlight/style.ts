import styled, { css } from 'styled-components';
import { ITheme } from '~/interfaces/theme';

export const StyledSpotlight = styled.div`
    width: fit-content;
    margin: 0 auto;
    padding-top: 18px;
    height: calc(100px - 54px);

    ${({ theme }: { theme: ITheme }) => css`
        background-color: ${theme['omnibox-background-color']}
    `}
`;

export const StyledBubbleContainer = styled.div`
    display: flex;
    padding-bottom: 20px;
`;

export const Bubble = styled.div`
    width: 57px;
    height: 57px;
    border-radius: 50%;
    background-position: center;
    background-repeat: no-repeat;
    margin-right: 25px;
    background-size: 24px;
    background-color: #f0f0f0;
    transition: 0.1s background-color;

    &:hover {
        background-color: #e4e4e4;
    }

    ${({ theme, icon, hasBadge, badgeNumber }: { theme: ITheme; icon: any; hasBadge?: boolean; badgeNumber?: number }) => css`
        background-image: url(${icon});

        ${hasBadge ? `
            &:after {
                content: "${badgeNumber ? badgeNumber : ""}";
                position: relative;
                width: 16px;
                height: 16px;
                background-color: #FF3131;
                display: block;
                margin-left: auto;
                border-radius: 8px;
                color: white;
                font-size: 9px;
                text-align: center;
                line-height: 15px;
            }
        ` : ``}
    `}
`;

export const Copyright = styled.div`
    text-align: center;
    font-size: 12px;
    opacity: 0.5;

    * {
        display: block;
    }
`;