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
  ExtLink,
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
  newsOnClick: any;
}

export const NewsCard = observer(({ newsImage, newsURL, newsCategory, newsPublisher, newsPubIcon, publishedWhen, newsTitle, newsFullTitle, newsOnClick }: Props) => {
  return (
    <StyledCard>
      <Header image={newsImage}>
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
      <ExtLink onClick={newsOnClick}>
        Read more
      </ExtLink>
    </StyledCard>
  );
});
