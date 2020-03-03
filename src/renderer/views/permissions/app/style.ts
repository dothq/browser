import styled, { css } from 'styled-components';
import { centerIcon } from '../../../../shared/mixins';

export const StyledApp = styled.div`
    height: -webkit-fill-available;
    display: block;
    transition: 0.2s opacity, 0.2s transform;
    background-color: white;
    border: 1px solid lightgray;
    border-radius: 4px;
    padding: 20px;
    box-shadow: 1px 1px 6px 2px #00000017;
    height: 120px;

    ${({ visible }: { visible: boolean }) => css`
        opacity: ${visible ? 1 : 0};
        transform: ${visible ? 'translateY(0px)' : 'translateY(-8px)'};
    `}
`;

export const TitleWrapper = styled.div`
    display: flex;
    line-height: 0px;
`;

export const PermissionIcon = styled.div`
  ${centerIcon(22)};
  height: 24px;
  width: 24px;

  margin-top: -3px;
  margin-right: 8px;
  opacity: 0.9;

  ${({ icon }: { icon: any }) => css`
    background-image: url(${icon});
  `}
`;

export const Icon = styled.div`
  ${centerIcon(16)};
  height: 24px;
  width: 24px;

  ${({ icon }: { icon: any }) => css`
    background-image: url(${icon});
  `}
`;