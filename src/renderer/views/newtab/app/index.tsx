
import {
  StyledNewTab,
  Columns,
  Column,
  CardImage,
  CardDescription,
  CardHeading,
  CardTitle,
  CardSourceIcon,
  Card,
  CardLongDescription,
  CardAttribution,
  CardTimestamp,
  Style,
  Section,
  DotLogo,
  Icon,
  Section_Left,
  Section_Right,
  Section_Middle,
} from './style';
import * as React from 'react';
import Skeleton from 'react-skeleton-loader';
const moment = require('moment');
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { icons } from '../../app/constants';
import { Search } from './components/Search';
import { Tiles } from './components/Tiles';
import store from './store';

export const FeedCard = ({
  category,
  title,
  description,
  source,
  timestamp,
  icon,
  image,
  uri,
  index,
}: {
  category: any;
  title: any;
  description: any;
  source: any;
  timestamp: any;
  icon: any;
  image: any;
  uri: any;
  index: any;
}) => {
  var a = moment(timestamp);
  var b = moment(new Date().getTime());

  return (
    <Column key={index}>
      <Card>
        <a href={uri} style={{ textDecoration: 'none', color: 'inherit' }}>
          <CardImage image={image} />
          <CardDescription>
            <CardHeading>{category}</CardHeading>
            <CardTitle>{title}</CardTitle>
            <CardLongDescription>{description}</CardLongDescription>
            <CardAttribution>
              <CardSourceIcon icon={icon} />
              <CardTimestamp>
                {source} - {b.to(a)}
              </CardTimestamp>
            </CardAttribution>
          </CardDescription>
        </a>
      </Card>
    </Column>
  );
};

export const SkeletonCard = () => {
  return (
    <Column>
      <Card>
        <CardImage image={'transparent'}>
          <Skeleton
            widthRandomness={0}
            width={'344px'}
            color={'var(--skeleton-color)'}
            borderRadius={'0px'}
          />
        </CardImage>
        <CardDescription>
          <CardHeading>
            <Skeleton color={'var(--skeleton-color)'} />
          </CardHeading>
          <CardTitle>
            <Skeleton color={'var(--skeleton-color)'} />
          </CardTitle>
          <CardLongDescription>
            <Skeleton count={5} color={'var(--skeleton-color)'} />
          </CardLongDescription>
          <CardAttribution>
            <CardSourceIcon icon={'transparent'}>
              <Skeleton
                widthRandomness={0}
                width={'16px'}
                color={'var(--skeleton-color)'}
              />
            </CardSourceIcon>
            <CardTimestamp>
              <Skeleton color={'var(--skeleton-color)'} />
            </CardTimestamp>
          </CardAttribution>
        </CardDescription>
      </Card>
    </Column>
  );
};

export const SkeletonFeed = () => {
  return (
    <Columns>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </Columns>
  );
};

const GlobalStyle = createGlobalStyle`${Style}`;

const openWebView = (view: any) => {
  window.location.href = `dot://${view}`
}

class NewTab extends React.Component {
  public list: any = [];

  public state: any = {
    news: [],
    newsLoaded: false,
    ironBarFixed: false,
    topSitesVisibility: true,
    feedVisibility: true,
    banner: ''
  };

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <ThemeProvider theme={store.theme}>
        <StyledNewTab>
          <GlobalStyle />
          <Section>
            <Section_Left>
              <DotLogo color={'#434343'} />
            </Section_Left>
            <Section_Middle>
              <Search />
              <Tiles />
            </Section_Middle>
            <Section_Right>
              <Icon icon={icons.settings} onClick={() => openWebView('settings')} />
            </Section_Right>
          </Section>
        </StyledNewTab>
      </ThemeProvider>
    );
  }
}

export default NewTab;
