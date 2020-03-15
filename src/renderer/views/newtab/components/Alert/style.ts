import styled, { css } from 'styled-components';
import { ITheme } from '~/interfaces/theme';

export const StyledAlert = styled.div`
    transition: 0.3s height;
    box-shadow: 0px 10px 80px rgba(0, 0, 0, 0.25);

    position: fixed;
    top: 0;
    z-index: 1;
    width: -webkit-fill-available;

    ${({ theme, visible }: { theme: ITheme; visible: boolean }) => css`
        background-color: ${theme['webui-newtab-background-color']};
        height: ${visible ? '58px' : '0px'};
    `}
`;

export const Container = styled.div`
    padding: 0 25px;
    display: flex;
    max-height: 58px;
`;

export const Title = styled.div`
    margin-left: 24px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;

    display: flex;
    align-items: center;
    text-transform: uppercase;

    ${({ theme }: { theme: ITheme }) => css`
        color: ${theme["general-title"]};
    `}
`;

export const Text = styled.div`
    margin-left: 18px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;

    display: flex;
    align-items: center;

    ${({ theme }: { theme: ITheme }) => css`
        color: ${theme["general-title"]};
    `}
`;

export const Flexy = styled.div`
    display: flex;
    flex: 1;

    vertical-align: middle;
    height: -webkit-fill-available;

    ${({ left, right }: { left?: boolean; right?: boolean }) => css`
        justify-content: ${
            left 
                ? "flex-start" 
                : right 
                    ? "flex-end" 
                    : ""
        }
    `}
`;

export const Action = styled.div`
    margin-left: 8px;
    padding: 8px 12px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;

    display: flex;
    align-items: center;
    text-transform: uppercase;

    transition: 0.1s background-color;

    ${({ theme, color }: { theme: ITheme; color: any }) => css`
        &:hover {
            background-color: ${theme["webui-newtab-alert-action-hover"]};
            border-radius: 4px;
        }

        color: ${color};
    `}
`;