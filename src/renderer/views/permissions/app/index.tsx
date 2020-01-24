import * as React from 'react';
import { 
  StyledApp, 
  TitleWrapper, 
  PermissionIcon,
  Icon 
} from './style';
import { Title, Subtitle } from '../components/Typography/style'
import store from '../store';
import { observer } from 'mobx-react';
import { Button, MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { permissionLocale } from '../constants/permissions';
import { icons } from '../../app/constants';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1a73e8'
    }
  }
})

const onHideClick = () => {
  store.hide()
}

const onAllowClick = () => {
  store.resolveRequest(true)
  store.hide()
}

const onBlockClick = () => {
  store.resolveRequest(false)
  store.hide()
}

const App = observer(() => (
  <MuiThemeProvider theme={theme}>
    <StyledApp visible={store.visible}>
        <TitleWrapper>
          <Title>{store.content[0].url} wants to</Title>
          <Icon icon={icons.close} style={{ marginLeft: 'auto', backgroundSize: '18px' }} onClick={onHideClick} />
        </TitleWrapper>
        <Subtitle>
          <PermissionIcon icon={permissionLocale[store.content[0].name].icon} />
          <span>{permissionLocale[store.content[0].name].friendlyName}</span>
        </Subtitle>
        <Button 
          variant="outlined" 
          color="primary" 
          style={{ 
            boxShadow: 'none', 
            float: 'right' 
          }} 
          onClick={onBlockClick}
        >Block</Button>

        <Button 
          variant="contained" 
          color="primary" 
          style={{ 
            boxShadow: 'none', 
            marginRight: '10px', 
            float: 'right' 
          }} 
          onClick={onAllowClick}
        >Allow</Button>
    </StyledApp>
  </MuiThemeProvider>
))

export default App;