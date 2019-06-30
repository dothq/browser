import styled, { css } from 'styled-components';
import { platform } from 'os';

export const StyledContainer = styled.div`
  display: flex;
  -webkit-app-region: no-drag;
  ${({ isFullscreen }: { isFullscreen: boolean }) => css`
    margin-left: ${platform() === 'darwin' && !isFullscreen ? 68 : 0}px;
  `};
`;

export const DotLauncher = styled.img`
    width: 40px;
    margin-left: 10px;
    filter: invert(100%);
    height: 38px;
    margin-top: 1.6px;
`;

export const DotLauncherWrapper = styled.div`
  cursor: pointer;

  ${({ visible }: { visible: boolean }) => css`
    opacity: ${visible ? 1 : 0};
    pointer-events: ${visible ? 'auto' : 'none'};
    width: ${visible ? '' : '0px'};
  `}
`;
