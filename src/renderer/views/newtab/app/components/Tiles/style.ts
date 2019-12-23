import styled, { css } from 'styled-components';
import { icons } from '../../../../app/constants';

export const StyledTiles = styled.div`
  margin: 50px 0;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const StyledTile = styled.div`
  border-radius: 3px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-flow: column;
  -ms-flex-flow: column;
  flex-flow: column;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  overflow: hidden;
  pointer-events: inherit;
  opacity: 1;
  width: 100px;
  height: 100px;
  box-shadow: 0 0 0 1px #efefef, 0 0 0 4px rgb(255,255,255);
  transition: box-shadow 150ms;
  margin-right: 35px;

  &:hover {
    box-shadow: 0 0 0 3px #accdef, 0 0 0 5px rgb(0, 124, 251);
  }
`;

export const TileIcon = styled.div`
  width: 45px;
  height: 45px;
  background-position: center;
  background-repeat: no-repeat;
  -webkit-filter: none;
  filter: none;
  border-radius: 4px;

  ${({ icon }: { icon?: any }) => css`
    background-image: url(${icon ? icon : icons.page});
    background-size: ${icon ? '45px' : '32px'};
    opacity: ${icon ? '1' : '0.4'};
  `}
`;

export const TileName = styled.div`
  -webkit-line-clamp: 1;
  font-size: 13px;
  text-align: center;
  color: var(--input-color);
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;
