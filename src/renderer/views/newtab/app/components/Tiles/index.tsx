import { StyledTiles, StyledTile, TileIcon } from './style';
import * as React from 'react';

const openURI = (uri: string) => {
  window.location.href = uri;
}

export const Tiles = () => {
  return (
    <StyledTiles>
      <StyledTile onClick={() => openURI('https://netflix.com')}>
        <TileIcon icon={'https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.png'} />
      </StyledTile>
      <StyledTile onClick={() => openURI('https://github.com')}>
        <TileIcon icon={'https://github.githubassets.com/apple-touch-icon-76x76.png'} />
      </StyledTile>
      <StyledTile onClick={() => openURI('https://twitter.com')}>
        <TileIcon icon={'https://abs.twimg.com/responsive-web/web/icon-ios.8ea219d4.png'} />
      </StyledTile>
      <StyledTile onClick={() => openURI('https://youtube.com')}>
        <TileIcon icon={'https://s.ytimg.com/yts/mobile/img/apple-touch-icon-144x144-precomposed-vflopw1IA.png'} />
      </StyledTile>
      <StyledTile onClick={() => openURI('https://brave.com')}>
        <TileIcon />
      </StyledTile>
      <StyledTile  onClick={() => openURI('https://gmail.com')}>
        <TileIcon icon={'https://www.gstatic.com/images/branding/product/2x/gmail_32dp.png'} />
      </StyledTile>
      <StyledTile onClick={() => openURI('https://spotify.com')}>
        <TileIcon icon={'https://www.scdn.co/i/_global/touch-icon-144.png'} />
      </StyledTile>
      <StyledTile  onClick={() => openURI('https://reddit.com')}>
        <TileIcon icon={'https://www.redditstatic.com/mweb2x/favicon/180x180.png'} />
      </StyledTile>
    </StyledTiles>
  );
};
