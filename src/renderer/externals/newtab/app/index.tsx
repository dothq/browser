import {
  StyledNewTab,
  Hero,
  Logo,
  IronBar,
  IronIcon,
  IronButton,
  Heading,
  Title,
  IronBar_Right,
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
  SectionTitle,
  IronBar_Left,
} from './style';
import * as React from 'react';
import PropTypes from 'prop-types';
import { SearchBox } from './components/SearchBox';
import Dropdown from './components/Dropdown';
import { DropdownItem } from './components/Dropdown/style';
import { DropdownSeperator } from './components/Dropdown/style';
import Checkbox from '@material-ui/core/Checkbox';
import { Tiles } from './components/Tiles';
import { Drawer } from './components/Drawer';
import { DrawerSeperator } from './components/Drawer/style';
import Ripple from '~/renderer/components/Ripple';
import { Circle } from '~/renderer/app/components/ToolbarButton/style';
import ToolbarButton from '~/renderer/app/components/ToolbarButton';
import Skeleton from 'react-skeleton-loader';
const moment = require('moment');
import SimpleStorage from 'react-simple-storage';
import store from '~/renderer/app/store';
import { icons } from '~/renderer/app/constants';

const openCustomizeModal = () => {};

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
            color={'#cbcbcb'}
            borderRadius={'0px'}
            animated={false}
          />
        </CardImage>
        <CardDescription>
          <CardHeading>
            <Skeleton color={'#cbcbcb'} animated={false} />
          </CardHeading>
          <CardTitle>
            <Skeleton color={'#cbcbcb'} animated={false} />
          </CardTitle>
          <CardLongDescription>
            <Skeleton count={5} color={'#cbcbcb'} animated={false} />
          </CardLongDescription>
          <CardAttribution>
            <CardSourceIcon icon={'transparent'}>
              <Skeleton
                widthRandomness={0}
                width={'16px'}
                color={'#cbcbcb'}
                animated={false}
              />
            </CardSourceIcon>
            <CardTimestamp>
              <Skeleton color={'#cbcbcb'} animated={false} />
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

class NewTab extends React.Component {
  public list: any = [];

  public state: any = {
    news: [],
    newsLoaded: false,
    ironBarFixed: false,
    topSitesVisibility: true,
    feedVisibility: true,
  };

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    this.grabNews();

    document.addEventListener('scroll', () => {
      if (window.scrollY > 290) {
        if (this.state.ironBarFixed != true) {
          this.setState(() => ({
            ['ironBarFixed']: true,
          }));
        }
      } else {
        if (this.state.ironBarFixed != false) {
          this.setState(() => ({
            ['ironBarFixed']: false,
          }));
        }
      }
    });
  }

  toggleVisibility(component: any) {
    this.setState(() => ({
      [`${component == 'topSites' ? 'topSitesVisibility' : 'feedVisibility'}`]:
        this.state[
          component == 'topSites' ? 'topSitesVisibility' : 'feedVisibility'
        ] == true
          ? false
          : true,
    }));
  }

  grabNews() {
    fetch(`https://api.dotbrowser.me/v2/news`)
      .then(resp => resp.json())
      .then(data => {
        const newsState = [];

        if (data.status == 'ok') {
          const { articles } = data;

          for (let i = 0; i < articles.length; i++) {
            const x = articles[i];

            x.title = x.title
              .split('-')
              .reverse()
              .splice(1, x.title.split('-').length)
              .reverse()
              .join('-');

            if (x.urlToImage) {
              newsState.push({
                url: x.url,
                favicon: `https://i.olsh.me/icon?size=80..120..200&url=${
                  x.url
                }`,
                source: x.source.name,
                title: x.title,
                description: x.description,
                image: x.urlToImage,
                publishDate: new Date(x.publishedAt).getTime(),
                index: i,
              });
            }
          }
        }

        this.setState({ news: newsState, newsLoaded: true });
      });
  }

  render() {
    return (
      <StyledNewTab>
        <SimpleStorage parent={this} />
        <IronBar isFixed={this.state.ironBarFixed}>
          {this.state.ironBarFixed == true && (
            <IronBar_Left>
              <img
                src={icons.logo}
                style={{
                  filter: 'invert(1)',
                  width: '38px',
                  transform: 'scale(1.3)',
                }}
              />
            </IronBar_Left>
          )}
          <IronBar_Right>
            <ToolbarButton
              icon={icons.edit}
              size={20}
              onClick={openCustomizeModal}
              style={{ marginRight: '5px' }}
            />
            <ToolbarButton icon={icons.user} size={25} />
          </IronBar_Right>
        </IronBar>
        <Hero>
          <Logo />
          <SearchBox isFixed={this.state.ironBarFixed} />
          <SectionTitle>
            Top Sites{' '}
            <ToolbarButton
              icon={icons.up}
              style={{
                marginLeft: '5px',
                transform: `${
                  this.state.topSitesVisibility == false
                    ? 'rotate(-180deg)'
                    : 'rotate(0deg)'
                }`,
                transition: '0.5s transform',
              }}
              onClick={() => this.toggleVisibility('topSites')}
            />
          </SectionTitle>
          <Tiles
            style={{
              height: this.state.topSitesVisibility == true ? 'auto' : '0px',
              overflow: 'hidden',
            }}
          />
          <SectionTitle>
            Feed{' '}
            <ToolbarButton
              icon={icons.up}
              style={{
                marginLeft: '5px',
                transform: `${
                  this.state.feedVisibility == false
                    ? 'rotate(-180deg)'
                    : 'rotate(0deg)'
                }`,
                transition: '0.5s transform',
              }}
              onClick={() => this.toggleVisibility('feed')}
            />
          </SectionTitle>
          <Columns
            style={{
              opacity:
                this.state.newsLoaded == true
                  ? this.state.feedVisibility == true
                    ? 1
                    : 0
                  : 0,
              pointerEvents:
                this.state.newsLoaded == true
                  ? this.state.feedVisibility == true
                    ? 'all'
                    : 'none'
                  : 'none',
            }}
          >
            {this.state.news.map(function(item: any, index: any) {
              return (
                <FeedCard
                  category={'General'}
                  title={item.title}
                  description={item.description}
                  source={item.source}
                  timestamp={item.publishDate}
                  icon={item.favicon}
                  image={item.image}
                  uri={item.url}
                  index={item.index}
                />
              );
            })}
          </Columns>
          {this.state.newsLoaded == false && <SkeletonFeed />}
          <SectionTitle>That's all folks!</SectionTitle>
        </Hero>
      </StyledNewTab>
    );
  }
}

export default NewTab;
