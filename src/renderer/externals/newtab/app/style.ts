import styled, { css } from 'styled-components';
import { centerIcon } from '~/shared/mixins';

export const StyledNewTab = styled.div`
  background-color: #ffffff;
  height: 100vh;
  user-select: none;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #0005;
    border: 2px solid white;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #0008;
  }
`;

export const Hero = styled.div`
  width: calc(100% - 64px);
  max-width: 1200px;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 75px;
  background-color: white;
`;

export const Logo = styled.div`
  width: var(--width);
  height: var(--width);
  filter: invert(1);
  background: url(https://dotbrowser.me/static/icon.png) 100% 100% /
    var(--width) no-repeat;
  display: block;
  margin-left: auto;
  margin-right: auto;
  --width: 250px;
`;

export const IronBar = styled.div`
  ${centerIcon()};
  top: 0%;
  width: 100%;
  padding: 25px;

  ${({ isFixed }: { isFixed: boolean }) => css`
    position: ${isFixed == true ? 'fixed' : 'absolute'};
    z-index: ${isFixed == true ? '9999' : 'unset'};
    background-color: ${isFixed == true ? 'white' : 'transparent'};
    box-shadow: ${isFixed == true ? '0px 5px 20px 0px #0000000d' : 'none'};
  `}
`;

export const IronButton = styled.div`
  border-radius: 5px;
  padding: 10px;
  transition: 0.3s background-color;

  &:hover {
    background-color: gray;
  }
`;

export const IronIcon = styled.div`
  width: 40px;
  height: 40px;
  -webkit-transition: background-color 0.3s;
  transition: background-color 0.3s;
  opacity: 0.8;
  background-size: 25px;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50px;
  margin: 0px 4px;

  &:hover {
    background-color: #110a0a1a;
  }

  ${({ icon, side }: { icon: any; side: string }) => css`
    float: ${side};
    background-image: url(${icon});
  `}
`;

export const Heading = styled.h1`
  font-family: Roboto;
  font-weight: 700;
  line-height: 1.28571429;
  letter-spacing: normal;
  font-size: 0.875rem;
  text-transform: uppercase;
  color: black;
`;

export const Title = styled.h1`
  font-family: Roboto;
  line-height: 1.28571;
  -webkit-letter-spacing: normal;
  -moz-letter-spacing: normal;
  -ms-letter-spacing: normal;
  letter-spacing: normal;
  font-size: 1.575rem;
  color: rgb(43, 43, 43);
  margin: 0px 0px 20px 13px;
  text-align: left;
  opacity: 0.9;
  font-weight: 300;

  ${({ icon }: { icon?: any }) => css`
    &::before {
      content: 'ic';
      width: 35px;
      height: 35px;
      -webkit-transition: background-color 0.3s;
      transition: background-color 0.3s;
      opacity: 0.8;
      background-size: 25px;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 50px;
      background-image: url(${icon});
      color: transparent;
      margin-right: 8px;
    }
  `}
`;

export const IronBar_Right = styled.div`
  float: right;
  display: flex;
`;

export const IronBar_Left = styled.div`
  float: left;
  display: flex;
`;

export const Columns = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: relative;
  margin-top: 24px;
  opacity: 1;
  -webkit-flex-flow: row wrap;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
`;

export const Column = styled.div`
  display: flex;
  margin-left: 32px;
  align-items: flex-start;
  flex-flow: column;
`;

export const Card = styled.div`
  width: 344px;
  min-height: 72px;
  height: auto;
  background-color: rgb(255, 255, 255);
  margin-bottom: 24px;
  box-shadow: rgba(60, 64, 67, 0.08) 0px 1px 1px 0px,
    rgba(60, 64, 67, 0.16) 0px 1px 3px 1px;
  border-radius: 4px;
  overflow: hidden;
  text-align: left;
`;

export const CardImage = styled.div`
  width: 100%;
  height: 194px;
  background-size: cover;
  will-change: opacity;
  opacity: 1;
  background-position: center center;
  transition: opacity 0.3s;

  ${({ image }: { image: any }) => css`
    background-image: url(${image});
  `}
`;

export const CardDescription = styled.div`
  display: flex;
  flex-flow: column;
  padding: 16px;
`;

export const CardHeading = styled.div`
  color: rgba(0, 0, 0, 0.54);
  font-family: Roboto;
  font-weight: 400;
  letter-spacing: 0.15rem;
  font-size: 10px;
  text-transform: uppercase;
`;

export const CardTitle = styled.div`
  margin-top: 12px;
  color: rgba(0, 0, 0, 0.87);
  font-family: Roboto;
  font-weight: 400;
  letter-spacing: 0.009375rem;
  font-size: 16px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: unset;
  max-height: unset;
  overflow: hidden;
`;

export const CardLongDescription = styled.div`
  font-size: 14px;
  margin-top: 12px;
  color: rgba(0, 0, 0, 0.54);
`;

export const CardAttribution = styled.div`
  margin-top: 16px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.54);
`;

export const CardSourceIcon = styled.div`
  width: 18px;
  height: 18px;
  background-size: 18px;
  opacity: 1;
  transition: opacity 0.2s;
  background-position: center center;
  background-repeat: no-repeat;

  ${({ icon }: { icon: any }) => css`
    background-image: url(${icon});
  `}
`;

export const CardTimestamp = styled.div`
  margin-left: 8px;
  font-size: 12px;
`;

export const SectionTitle = styled.p`
  font-family: Roboto;
  line-height: 1.28571;
  -webkit-letter-spacing: normal;
  -moz-letter-spacing: normal;
  -ms-letter-spacing: normal;
  -webkit-letter-spacing: normal;
  -moz-letter-spacing: normal;
  -ms-letter-spacing: normal;
  letter-spacing: normal;
  font-size: 1.575rem;
  color: rgb(43, 43, 43);
  margin: 20px 0px 20px 70px;
  text-align: left;
  opacity: 0.9;
  font-weight: 300;
  display: flex;
`;
