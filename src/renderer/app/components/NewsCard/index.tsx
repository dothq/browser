import * as React from 'react';
import { observer } from 'mobx-react';
import {
  StyledCard,
  Header,
  Item,
  Items,
  Overline,
} from './style';
import { icons } from '../../constants';

interface Props {
  newsImage: any;
  newsURL?: any;
  newsCategory?: any;
  newsPublisher?: any;
  newsPubIcon?: any;
  publishedWhen?: any;
}

export const NewsCard = observer(({ newsImage, newsURL, newsCategory, newsPublisher, newsPubIcon, publishedWhen }: Props) => {
  return (
    <StyledCard>
      <Header image={newsImage}>

      </Header>
      <Items>
        <Item>
          <Overline>Learn more</Overline>
        </Item>
      </Items>
    </StyledCard>
  );
});
