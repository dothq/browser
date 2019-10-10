import { StyledTiles, StyledTile, TileName, TileIcon } from './style';
import * as React from 'react';

export const Tiles = ({ style }: { style: any }) => {
  return (
    <StyledTiles style={style}>
      <StyledTile>
        <TileIcon />
        <TileName>Wikipedia</TileName>
      </StyledTile>
    </StyledTiles>
  );
};
