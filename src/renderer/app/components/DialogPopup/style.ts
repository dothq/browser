import styled, { css } from "styled-components";

export const DialogModal = styled.div`
    transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    position: fixed;

    ${({ visible }: { visible?: boolean }) => css`
        opacity: ${visible ? 1 : 0};
        pointer-events: ${visible ? 'all' : 'none'}
    `}
`;

export const DialogBackdrop = styled.a`
    opacity: 1;
    transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
    cursor: default;
    opacity: 1;
    height: 100%;

`;

export const DialogContainer = styled.div`
    transform: none;
    transition: opacity, box-shadow 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    height: 100%;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 2000;
    right: 0px;
    bottom: 0px;
    top: 0px;
    left: 0px;
    color: rgba(0,0,0,0.87);
    opacity: 1;
    height: 100%;

`;

export const DialogRoot = styled.div`
    max-width: 600px;
    display: flex;
    max-height: calc(100% - 96px);
    flex-direction: column;
    margin: 48px;
    position: relative;
    overflow-y: auto;
    box-shadow: 0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12);
    background-color: #fff;
    border-radius: 4px;
    color: #000;
`;

export const DialogTitle = styled.h6`
    font-size: 1.25rem;
    font-family: Roboto;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.0075em;
    flex: 0 0 auto;
    margin: 0;
    padding: 16px 24px;
`;

export const DialogP = styled.p`
    margin-bottom: 16px;
    color: rgba(0, 0, 0, 0.54);
    font-size: 1rem;
    font-family: Roboto;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    flex: 0 0 auto;
    margin: 0;
    padding: 16px 24px;
`;

export const DialogButton = styled.button`
    color: #1976d2;
    padding: 6px 8px;
    color: rgba(0, 0, 0, 0.87);
    padding: 6px 16px;
    font-size: 0.875rem;
    min-width: 64px;
    box-sizing: border-box;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-family: Roboto;
    font-weight: 500;
    line-height: 1.75;
    border-radius: 4px;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    color: inherit;
    border: 0;
    cursor: pointer;
    margin: 0;
    display: inline-flex;
    outline: none;
    padding: 0;
    position: relative;
    align-items: center;
    user-select: none;
    border-radius: 0;
    vertical-align: middle;
    -moz-appearance: none;
    justify-content: center;
    text-decoration: none;
    background-color: transparent;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;

    &:hover {
        background-color: rgba(25, 118, 210, 0.08);
        text-decoration: none;
    }
`;

export const DialogContent = styled.div`
    flex: 0 0 auto;
    margin: 0;
    padding: 16px 24px;
    width: 350px;
`;