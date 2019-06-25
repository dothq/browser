import styled, { css } from 'styled-components';
import { centerIcon, overline } from '~/shared/mixins';
import store from '../../store'

export const StyledCard = styled.div`
  background-color: rgba(255, 255, 255, 0.08);
  margin-bottom: 24px;
  border-radius: 30px;
  color: white;
  overflow: hidden;
  width: 245px;
  height: 359px;
  box-shadow: 5px 5px 33px 10px rgba(0,0,0,0.21);
  background-color: rgba(255,255,255,0.08);
`;

export const Offline = styled.div`

`;

export const PubIcon = styled.img`
  border-radius: 50%;
`;

export const Header = styled.div`
  width: 100%;
  padding: 24px;
  height: 212px;
  background-size: cover;
  transition: 0.5s filter;

  &:hover {
    filter: brightness(50%);
  }

  ${({ image }: { image: any }) => css`
    background-image: url(${image})
  `};
`;

export const ExtIcon = styled.img`
  opacity: 0;
  zoom: 0%;
  -webkit-transition: 0.5s all;
  transition: 0.5s all;
  width: 20%;
  height: 100%;
  transform: translate(206%, 0%);
  filter: invert(1)

  &:hover {
    opacity: 1;
    zoom: 50%;
  }
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 100;
  margin-bottom: 8px;
  padding-left: 18px;
  margin-top: -3px;
  padding-right: 18px;
`;

export const Degrees = styled.div`
  font-size: 64px;
  font-weight: 500;
  display: flex;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled.div`
  ${centerIcon()};
  width: 80px;
  height: 80px;
`;

export const SmallIcon = styled.div`
  ${centerIcon()};
  width: 32px;
  height: 32px;
  margin-top: 16px;
`;

export const Items = styled.div`
  display: flex;
  padding-left: 7px;
`;

export const Item = styled.div`
  display: flex;
  flex: 1;
  padding-top: 16px;
  padding-bottom: 16px;
  flex-flow: column;
  margin-left: 10px;
`;

export const SmallDegrees = styled.div`
  font-size: 14px;

  ${({ night }: { night?: boolean }) => css`
    margin-top: ${night ? 4 : 16}px;
    opacity: ${night ? 0.54 : 1};
  `};
`;

export const Overline = styled.div`
  ${overline()};
`;
