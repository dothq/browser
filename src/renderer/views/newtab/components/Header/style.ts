import styled from 'styled-components';

export const StyledHeader = styled.div`
    height: calc(400px); // height: calc(400px + 58px); 
    max-height: calc(400px); // max-height: calc(400px + 58px);
    min-height: calc(400px); // min-height: calc(400px + 58px);
    overflow: hidden;

    background: linear-gradient(0deg,rgba(0, 0, 0, 0.48),rgba(0, 0, 0, 0.57));
    background-blend-mode: soft-light, normal;
`;

export const Container = styled.div.attrs(props => ({
    style: {
        backgroundImage: "url(https://source.unsplash.com/1920x1080)"
    },
  }))`
    // margin-top: 58px;

    width: -webkit-fill-available;
    height: -webkit-fill-available;

    animation: 3.5s fadein 0.5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
    opacity: 0;

    width: -webkit-fill-available;

    background-position-x: center;
    background-size: 100%;
    background-attachment: fixed;

    @keyframes fadein {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

export const ContentContainer = styled.div`
    margin: 0 auto;
    // padding-top: 58px;

    display: flex;
    justify-content: center;
    flex-flow: column;

    position: absolute;
    top: 0;
    margin: 0 auto;

    width: 100%;
    height: 400px;

    overflow-x: hidden;
    margin-top: 58px;
`;

export const Dot = styled.div`
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);

    border-radius: 52px;

    width: 52px;
    height: 52px;
    max-width: 52px;
    min-width: 52px;

    display: flex;
    align-self: center;
`;