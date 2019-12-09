import * as React from 'react';
import { StyledApp, Icon, TitleWrapper } from './style';
import { Title, Subtitle } from '../components/Typography/style'
import { icons } from '../../app/constants';
import store from '../store';
import { observer } from 'mobx-react';
import { Button } from '@material-ui/core';

const content = () => {
  if(store.content.length != 0) {
    return store.content[0]
  } else {
    return {
      content: '',
      action: 'alert'
    }
  }
}

export const App = observer(() => (
  <StyledApp visible={store.visible}>
      <TitleWrapper>
        <Title>{content().action == 'alert' ? 'Alert' : content().action == 'confirm' ? 'Confirm' : 'Input'}</Title>
        <Icon icon={icons.close} style={{ marginLeft: 'auto' }} onClick={() => store.hide()} />
      </TitleWrapper>
      <Subtitle>{`${content().content}`}</Subtitle>
      <Button variant="contained" color="primary">OK</Button>
      {content().action == 'confirm' && <Button variant="outlined">Cancel</Button>}
  </StyledApp>
))