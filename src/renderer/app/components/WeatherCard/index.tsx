import * as React from 'react';
import { observer } from 'mobx-react';
import {
  Content,
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
} from './style';
import { icons } from '../../constants';
import console = require('console');
const net = require("electron").remote.net;

const city = net.request({
  method: 'GET',
  protocol: 'https:',
  hostname: 'api.ipdata.co',
  port: 443,
  path: '/city?api-key=e7ff7273b86c9724895708c38bb01e05990667e502326f25d5ebf4cb'
});

city.on('response', (response) => {
  var setCity = response.statusMessage;
  sendCity(setCity);
  console.log(setCity)
})

var lC = '';

function sendCity(city: string) {
  lC = city;
}

const locationCity = lC;

export const WeatherCard = observer(() => {
  return (
    <StyledCard>
      <Header>
        <Left>
          <div>
            <Title>{locationCity}</Title>
            <Degrees>20°</Degrees>
            <div
              style={{
                fontSize: 16,
                fontWeight: 400,
                marginBottom: 4,
                marginTop: 8,
              }}
            >
              Few clouds
            </div>
            <div style={{ fontSize: 16, fontWeight: 300 }}>Day</div>
          </div>
          <div>
            <Icon style={{ backgroundImage: `url(${icons.fewClouds})` }} />
          </div>
        </Left>
      </Header>
      <Items>
        <Item>
          <Overline>WED</Overline>
          <SmallIcon style={{ backgroundImage: `url(${icons.fewClouds})` }} />
          <SmallDegrees>20°</SmallDegrees>
          <SmallDegrees night>12°</SmallDegrees>
        </Item>
        <Item>
          <Overline>THU</Overline>
          <SmallIcon style={{ backgroundImage: `url(${icons.fewClouds})` }} />
          <SmallDegrees>20°</SmallDegrees>
          <SmallDegrees night>12°</SmallDegrees>
        </Item>
        <Item>
          <Overline>FRI</Overline>
          <SmallIcon style={{ backgroundImage: `url(${icons.fewClouds})` }} />
          <SmallDegrees>20°</SmallDegrees>
          <SmallDegrees night>12°</SmallDegrees>
        </Item>
        <Item>
          <Overline>SAT</Overline>
          <SmallIcon style={{ backgroundImage: `url(${icons.fewClouds})` }} />
          <SmallDegrees>20°</SmallDegrees>
          <SmallDegrees night>12°</SmallDegrees>
        </Item>
      </Items>
    </StyledCard>
  );
});
