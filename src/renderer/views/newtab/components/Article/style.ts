import styled, { css } from 'styled-components';
import { ITheme } from '~/interfaces/theme';

export const LPostThumbnail = styled.div.attrs((props: any) => ({
    style: {
        backgroundImage: `url(${props.thumbnail})`
    },
  }))`
    background-color: transparent;
    width: 898px;
    border-radius: 3px;
    display: block;
    background-size: 100%;
    background-position: center;
    transition: background-size 0.4s cubic-bezier(0.72, 0.07, 0, 1);
`;

export const SPostThumbnail = styled.div.attrs((props: any) => ({
    style: {
        backgroundImage: `url(${props.thumbnail})`
    },
  }))`
    background-color: transparent;
    border-radius: 3px;
    min-width: 258px;
    height: 180px;
    background-size: 130%;
    background-position: center;
    transition: background-size 0.4s cubic-bezier(0.72, 0.07, 0, 1);
`;

export const LargePost = styled.a`
    width: 840px;
    height: 230px;
    display: flex;
    min-width: 950px;
    cursor: pointer;
    text-decoration: none;

    filter: blur(8px);

    animation: blur 0.3s ease-out forwards 0.7s;

    @keyframes blur {
        0% {
            filter: blur(8px);
        }
        100% {
            filter: blur(0px);
        }
    }

    &:hover > ${LPostThumbnail} {
        background-size: 110%;
    }
`;

export const SmallPost = styled.a`
    width: 295px;
    margin-top: 36px;
    display: inline-grid;
    cursor: pointer;
    margin-right: 36px;
    text-decoration: none;

    filter: blur(8px);

    animation: blur 0.3s ease-out forwards 0.7s;

    @keyframes blur {
        0% {
            filter: blur(8px);
        }
        100% {
            filter: blur(0px);
        }
    }

    &:hover > ${SPostThumbnail} {
        background-size: 140%;
    }
`;

export const LContent = styled.div`
    padding-left: 20px;
    width: -webkit-fill-available;
`;

export const SContent = styled.div`
    display: block;
    padding: 8px;
`;

export const Tag = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;

    display: flex;
    align-items: center;
    text-transform: uppercase;

    margin-bottom: 5px;

    opacity: 0.9;

    ${({ theme }: { theme?: ITheme }) => css`
        color: ${theme["general-title"]}
    `};
`;

export const Headline = styled.div`
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    align-items: center;

    ${({ theme, large }: { theme?: ITheme; large?: boolean }) => css`
        color: ${theme["general-title"]};

        margin-bottom: 5px;
        ${large ? '' : 'margin-top: 5px;'};
    `};
`;

export const Story = styled.div`
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: 300;
    font-size: 17px;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;

    align-items: center;

    ${({ theme }: { theme?: ITheme }) => css`
        color: ${theme["general-title"]}
    `};
`;

export const Source = styled.div`
    display: flex;
    margin-top: 14px;
`;

export const Avatar = styled.div`
    width: 42px;
    height: 42px;
    background-color: gray;
    border-radius: 25px;
    background-size: cover;
    background-repeat: no-repeat;

    ${({ icon }: { icon: any }) => css`
        background-image: url(${icon});
    `};
`;

export const SourceContainer = styled.div`
    margin-left: 14px;
`;

export const Name = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;

    align-items: center;

    display: block;
    height: 20px;

    ${({ theme }: { theme?: ITheme }) => css`
        color: ${theme["general-title"]}
    `};
`;

export const Published = styled(Name)`
    opacity: 0.5;
`;