import * as React from 'react';
import { observer } from 'mobx-react';
import {
  StyledCard,
  Header,
  Item,
  Items,
  Overline,
  PubIcon,
  Title,
  ExtIcon,
} from './style';
import { icons } from '../../constants';

interface Props {
  newsImage: any;
  newsURL?: any;
  newsCategory?: any;
  newsPublisher?: any;
  newsPubIcon?: any;
  publishedWhen?: any;
  newsTitle: any;
  newsFullTitle: any;
  newsOnClick: (e?: React.MouseEvent<HTMLDivElement>) => void;
}

export const NewsCard = observer(({ newsImage, newsURL, newsCategory, newsPublisher, newsPubIcon, publishedWhen, newsTitle, newsFullTitle, newsOnClick }: Props) => {
  return (
    <StyledCard onClick={newsOnClick}>
      <Header image={newsImage}>
        <ExtIcon src={icons.open} />
      </Header>
      <Items>
        <Item>
          <Overline>
            <div style={{ display: 'flex' }}>
              <PubIcon src={newsPubIcon}></PubIcon>
              <span style={{ marginLeft: '10px', marginTop: '1.3px' }}>{newsPublisher}</span>
            </div>
          </Overline>
        </Item>
      </Items>
      <Title title={newsFullTitle}>{newsTitle}</Title>
    </StyledCard>
  );
});
