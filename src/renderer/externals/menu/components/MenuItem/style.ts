import { shadows, centerIcon } from '~/shared/mixins';
import styled, { css } from 'styled-components';

export const MenuItem = styled.div`
  padding: 12px 24px;
  font-weight: 400;
  font-size: 14px;
  font-family: Roboto;
  color: #fff;

  ${({ icon, selected, invert, opac, borderRadius }: { icon?: string; selected?: boolean; invert?: boolean; opac?: boolean; borderRadius?: boolean; }) => css`
    background-color: ${selected ? 'rgba(255, 255, 255, 0.15)' : 'none'};

    &:hover {
      background-color: rgba(255, 255, 255, ${selected ? 0.15 : 0.08});
    }

    ${icon &&
      `
      padding-left: ${24 + 16 + 8}px;
      &:before {
        content: '';
        filter: ${invert ? 'invert(0)' : 'invert(100%)'};
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
