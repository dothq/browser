import styled, { css } from 'styled-components';
import { icons } from '../../../../app/constants';
import { ITheme } from '~/interfaces/theme';

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
  transition: box-shadow 150ms;
  margin-right: 35px;

  ${({ theme }: { theme?: ITheme }) => css`
    box-shadow: ${theme['webui-newtab-tile-shadow']};

    &:hover {
      box-shadow ${theme['webui-newtab-tile-shadow-hover']};
    }
  `};
`;


export const TileIcon = styled.div`
  width: 45px;
  height: 45px;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 4px;

  ${({ icon, theme }: { icon?: any; theme?: ITheme }) => css`
    background-image: url(${icon ? icon : icons.page});
    background-size: ${icon ? '45px' : '32px'};
    opacity: ${icon ? '1' : theme['webui-newtab-icon-opacity']};
    filter: ${icon ? 'none' : theme['webui-newtab-icon-filter']};
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
