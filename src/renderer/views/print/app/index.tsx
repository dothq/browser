import * as React from 'react';
import { StyledApp, Preview, PrintController, Page, Icon, TitleWrapper, ListItem, CloseIcon } from './style';
import { Title, Subtitle } from '../components/Typography/style'
import { Printers } from '../components/Printers';
import { icons } from '../../app/constants';
import store from '../store';
import { observer } from 'mobx-react';
import { Select, MenuItem, FormControl, TextField } from '@material-ui/core';


const onPageChange = (event: React.ChangeEvent<{ value: unknown }>) => {
  store.settings.pages = event.target.value as number;
};

const App = observer(() => (
  <StyledApp visible={store.visible}>
    <Preview>
    
    </Preview>
    <PrintController>
      <TitleWrapper>
        <Title>Print</Title>
        <CloseIcon style={{ marginLeft: 'auto' }} onClick={() => store.hide()} />
      </TitleWrapper>
      <Printers />
      <ListItem>
        <Subtitle>Pages</Subtitle>
        <FormControl variant="outlined" style={{ marginLeft: 'auto' }}>
          <Select
            id="print-pages"
            value={store.settings.pages}
            onChange={onPageChange}
          >
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={1}>Custom amount</MenuItem>
          </Select>
        </FormControl>
      </ListItem>
      <ListItem>
        <Subtitle>Copies</Subtitle>
        <FormControl variant="outlined" style={{ marginLeft: 'auto' }}>
          <TextField id="print-copies" type="number" />
        </FormControl>
      </ListItem>
      <ListItem>
        <Subtitle>Page orientation</Subtitle>
        <FormControl variant="outlined" style={{ marginLeft: 'auto' }}>
          <Select
            id="print-orientation"
            value={store.settings.pages}
            onChange={onPageChange}
          >
            <MenuItem value={0}>Portrait</MenuItem>
            <MenuItem value={1}>Landscape</MenuItem>
          </Select>
        </FormControl>
      </ListItem>
    </PrintController>
  </StyledApp>
))

export default App;