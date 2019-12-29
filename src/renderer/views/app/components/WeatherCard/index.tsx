import * as React from 'react';
import { observer } from 'mobx-react';
import {
  StyledCard,
  Icon,
  Header,
  Left,
  Title,
  Item,
  Items,
  Overline,
  SmallIcon,
  Degrees,
  SmallDegrees,
  Offline,
} from './style';
import { icons } from '../../constants';
import console = require('console');
const fetch = require("node-fetch");
import store from '../../store';
import { resolve } from 'path';
import { homedir } from 'os';

export const WeatherCard = observer(() => {
  return (
    <StyledCard>
      <Header time={store.weather.timeInt}>
        <Left>
          <div>
            <Title>{store.weather.location}</Title>
            <Degrees>{store.weather.temp}°</Degrees>
            <div
              style={{
                fontSize: 16,
                fontWeight: 400,
                marginBottom: 4,
                marginTop: 8,
                width: '520px'
              }}
            >
              {store.weather.summary}
            </div>
            <div style={{ fontSize: 16, fontWeight: 300 }}>{store.weather.timetype}</div>
          </div>
          <div style={{ marginLeft: '-400px' }}>
            <Icon style={{ backgroundImage: `url(${icons.scattered_thunderstorm_night})` }} />
          </div>
        </Left>
      </Header>
      <Items>
        <Item title={store.weather.day1.summary}>
          <Overline>{store.weather.day1.name}</Overline>
          <SmallIcon style={{ backgroundImage: `url(${icons.scattered_thunderstorm_night})` }} />
          <SmallDegrees>{store.weather.day1.maxTemp}°</SmallDegrees>
          <SmallDegrees night>{store.weather.day1.minTemp}°</SmallDegrees>
        </Item>
        <Item title={store.weather.day2.summary}>
          <Overline>{store.weather.day2.name}</Overline>
          <SmallIcon style={{ backgroundImage: `url(${icons.scattered_thunderstorm_night})` }} />
          <SmallDegrees>{store.weather.day2.maxTemp}°</SmallDegrees>
          <SmallDegrees night>{store.weather.day2.minTemp}°</SmallDegrees>
        </Item>
        <Item title={store.weather.day3.summary}>
          <Overline>{store.weather.day3.name}</Overline>
          <SmallIcon style={{ backgroundImage: `url(${icons.scattered_thunderstorm_night})` }} />
          <SmallDegrees>{store.weather.day3.maxTemp}°</SmallDegrees>
          <SmallDegrees night>{store.weather.day3.minTemp}°</SmallDegrees>
        </Item>
        <Item title={store.weather.day4.summary}>
          <Overline>{store.weather.day4.name}</Overline>
          <SmallIcon style={{ backgroundImage: `url(${icons.scattered_thunderstorm_night})` }} />
          <SmallDegrees>{store.weather.day4.maxTemp}°</SmallDegrees>
          <SmallDegrees night>{store.weather.day4.minTemp}°</SmallDegrees>
        </Item>
      </Items>
    </StyledCard>
  );
});
