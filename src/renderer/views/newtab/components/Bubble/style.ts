import styled, { css } from 'styled-components';
import { centerIcon } from '~/shared/mixins';

export const StyledBubble = styled.a`
    width: 127px;
    height: 127px;
    padding: 38px;

    text-decoration: none;

    margin-left: 50px;

    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

    background: #ffffff;
    border-radius: 4px;

    transition: 0.1s box-shadow;

    &:hover {
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25), 0 0 0 3px #008effcc, inset 0 0 0 5px #29a3ff91;
    }
`;

export const Icon = styled.div`
  ${({ icon, size }: { icon: any; size: number }) => css`
    background-image: url(${icon});
    
    width: ${size}px;
    height: ${size}px;

    background-size: ${size}px;

    ${centerIcon()}
  `}
`;