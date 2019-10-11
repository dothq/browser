import styled from 'styled-components';

export const StyledTiles = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-left: -16px;
  margin-top: -16px;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  overflow: hidden;
`;

export const StyledTile = styled.div`
  border-radius: 5px;
  margin-top: 8px;
  padding: 16px 8px;
  -webkit-transition: 0.1s background-color;
  transition: 0.1s background-color;
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
  min-width: 124.5px;
  max-width: 124.5px;

  &:hover {
    background-color: var(--tile-hover);
  }
`;

export const TileIcon = styled.div`
  opacity: 1;
  width: 56px;
  height: 56px;
  background-color: #fff;
  border-radius: 50%;
  margin-bottom: 16px;
  background-size: 32px;
  background-position: center;
  background-repeat: no-repeat;
  -webkit-filter: none;
  filter: none;
  background-image: url(data:png;base64,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);
  background-size: 20px;
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
