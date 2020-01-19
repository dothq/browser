import * as React from 'react';
import { StyledApp, TitleWrapper } from './style';
import { Title, Subtitle } from '../components/Typography/style'
import store from '../store';
import { observer } from 'mobx-react';
import { Button, MuiThemeProvider, createMuiTheme } from '@material-ui/core';

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
          <Title>{store.content[0].url} wants to</Title>
        </TitleWrapper>
        <Subtitle>Access your location</Subtitle>
        <Button variant="outlined" color="primary" style={{ boxShadow: 'none', float: 'right' }}>Block</Button>
        <Button variant="contained" color="primary" style={{ boxShadow: 'none', marginRight: '10px', float: 'right' }}>Allow</Button>
    </StyledApp>
  </MuiThemeProvider>
))

export default App;