import styled, { css } from 'styled-components';
import { centerIcon } from '~/shared/mixins';
import { icons } from '../../constants';
import { appWindow } from '../../'
import console = require('console');
import { remote } from 'electron';

function width() {
  console.log(appWindow)
  if(remote.screen.getPrimaryDisplay().size.width >= 1720) {
    return "6px"
  }
  else {
    return "13px"
  }
}

export const OverlayScrollbarStyle = `
  ::-webkit-scrollbar {
    width: ${width()};
    height: 3px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.16);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.48);
  }
`;

export const Panel = styled.div`
  height: 100%;
  background-color: #00000079
`;

export const StyledOverlay = styled.div`
  color: white;
  position: absolute;
  display: flex;
  flex-flow: column;
  align-items: center;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 9999;
  transition: 0.2s opacity;
  backface-visibility: hidden;
  background-color: #000000e8;

  ${({ visible }: { visible: boolean }) => css`
    opacity: ${visible ? 1 : 0};
    pointer-events: ${visible ? 'auto' : 'none'};
  `};
`;

export const HeaderText = styled.div`
  position: relative;
  display: flex;
  font-size: 16px;
  padding-left: 8px;
  padding-top: 6px;
  padding-right: 24px;
  padding-bottom: 6px;
  margin-bottom: 16px;
  margin-top: -8px;
  border-radius: 50px;
  transition: 0.1s background-color;
  cursor: pointer;

  ${({ clickable }: { clickable: boolean }) => css`
    pointer-events: ${clickable ? 'auto' : 'none'};
  `}

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const Image = styled.img`
  ${({ center }: { center: boolean }) => css`
    display: block;
    margin-left: auto;
    margin-right: auto;
  `}
`;

export const HeaderArrow = styled.div`
  ${centerIcon()};
  margin-left: 8px;
  height: 18px;
  width: 18px;
  background-image: url(${icons.forward});
  filter: invert(100%);
`;

export const DropArrow = styled.div`
  ${centerIcon(24)};
  margin-left: 8px;
  height: 32px;
  width: 32px;
  background-image: url(${icons.down});
  filter: invert(100%);
  border-radius: 50%;
  transition: 0.1s background-color;

  &:hover {
    background-color: rgba(0,0,0,0.15);
  }
`;

export const IconButton = styled.div`
  ${centerIcon(24)};
  margin-left: 8px;
  height: 32px;
  width: 32px;
  filter: invert(100%);
  border-radius: 50%;
  transition: 0.1s background-color;

  &:hover {
    background-color: rgba(0,0,0,0.15);
  }

  ${({ icon }: { icon: any }) => css`
    background-image: url(${icon});
  `}  
`;

export const Separator = styled.div`
  background-color: rgba(0, 0, 0, 0.12);
  height: 1px;
  width: 100%;
`;

export const Section = styled.div`
  padding: 24px;
  background-color: rgba(255, 255, 255, 0.08);
  margin-bottom: 24px;
  border-radius: 30px;
  color: white;
  overflow: hidden;
  box-shadow: 5px 5px 33px 10px rgba(0,0,0,0.21)
`;

export const Actions = styled.div`
  display: flex;
  margin-left: -16px;
  margin-top: -16px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Scrollable = styled.div`
  width: 100%;
  flex: 1;
  overflow-y: scroll;
  display: flex;
  flex-flow: column;
  align-items: center;

  ${OverlayScrollbarStyle};
`;

export const Title = styled.div`
  font-size: 24px;
  margin-left: 24px;
  font-weight: 300;
  margin-bottom: 16px;
  margin-top: 24px;
  color: white;
  position: relative;
  display: flex;
  padding-right: 42px;

  &:hover {
    ${DropArrow} {
      background-color: rgba(0, 0, 0, 0.15);
    }
  }
`;

export const Container = styled.div`
  position: absolute;
  transition: 0.2s transform, 0.2s opacity, 0.2s visibility;
  will-change: transform, opacity, pointer-events;
  backface-visibility: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;

  ${({ visible, right }: { visible: boolean; right?: boolean }) => css`
    transform: translateX(${visible ? 0 : right ? 32 : -32}px);
    opacity: ${visible ? 1 : 0};
    pointer-events: ${visible ? 'auto' : 'none'};
  `};
`;

export const Content = styled.div`
  width: calc(100% - 64px);
  max-width: 800px;
`;

export const Preloader = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;
`;

export const Dot = styled.img`
  width: 250px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
  transition: opacity 0.8s;
`;
