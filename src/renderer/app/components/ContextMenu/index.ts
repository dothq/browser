import { shadows, centerIcon } from '~/shared/mixins';
import styled, { css } from 'styled-components';

export const ContextMenu = styled.div`
  position: absolute;
  transition: 0.2s opacity, 0.2s margin-top;
  width: 150px;
  cursor: default;
  padding: 8px 0;
  z-index: 9999;
  box-shadow: ${shadows(8)};
  background-color: var(--context-menu-color);
  border-radius: 8px;

  ${({ visible }: { visible: boolean }) => css`
    opacity: ${visible ? 1 : 0};
    pointer-events: ${visible ? 'auto' : 'none'};
    margin-top: ${visible ? 0 : -20}px;
  `}
`;

export const ContextMenuItem = styled.div`
  padding: 12px 24px;
  font-weight: 400;
  font-size: 14px;
  color: var(--context-menu-item-color);

  ${({ icon, selected, invert, opac, borderRadius }: { icon?: string; selected?: boolean; invert?: boolean; opac?: boolean; borderRadius?: boolean; }) => css`
    background-color: ${selected ? 'var(--context-menu-selected)' : 'none'};

    &:hover {
      background-color: var(--context-menu-hover);
    }

    ${icon &&
      `
      padding-left: ${24 + 16 + 8}px;
      &:before {
        content: '';
        filter: var(--context-menu-icon-filter);
        opacity: ${opac ? 1 : 0.54};
        ${centerIcon()};
        width: 16px;
        height: 16px;
        left: 16px;
        position: absolute;
        border-radius: ${borderRadius ? '50%' : '0px'};
        background-image: url(${icon});
      }
    `}
  `}
`;
