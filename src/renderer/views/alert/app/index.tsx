import * as React from 'react';
import { StyledApp, Icon, TitleWrapper } from './style';
import { Title, Subtitle } from '../components/Typography/style'
import { icons } from '../../app/constants';
import store from '../store';
import { observer } from 'mobx-react';
import { Button, MuiThemeProvider, createMuiTheme } from '@material-ui/core';


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

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1a73e8'
    }
  }
})

const App = observer(() => (
  <MuiThemeProvider theme={theme}>
    <StyledApp visible={store.visible}>
        <TitleWrapper>
          <Title>{content().action == 'alert' ? 'Alert' : content().action == 'confirm' ? 'Confirm' : 'Input'}</Title>
        </TitleWrapper>
        <Subtitle>{`${content().content}`}</Subtitle>
        <Button variant="contained" color="primary" style={{ boxShadow: 'none' }} onClick={() => store.hide()}>OK</Button>
        {content().action == 'confirm' && <Button variant="outlined" style={{ boxShadow: 'none' }} onClick={() => store.hide()}>Cancel</Button>}
    </StyledApp>
  </MuiThemeProvider>
))

export default App;