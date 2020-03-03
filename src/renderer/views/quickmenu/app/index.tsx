import * as React from 'react';
import { StyledApp, StyledMenu, Category, MenuItem, Label, Hotkey, Icon } from './style';
import store from '../store';
import { observer } from 'mobx-react';
import { icons } from '../../app/constants';
import { callViewMethod } from '~/shared/utils/view';
import { ipcRenderer } from 'electron';

const onBackClick = () => {
  callViewMethod(store.tabId, 'webContents.goBack');
  store.hide();
}

const onForwardClick = () => {
  callViewMethod(store.tabId, 'webContents.goForward');
  store.hide();
}

const onRefreshClick = () => {
  callViewMethod(store.tabId, 'webContents.reload');
  store.hide();
}

const onPrintClick = () => {
  ipcRenderer.send('open-print');
  store.hide();
}

const onViewSourceClick = () => {
  callViewMethod(store.tabId, 'webContents.loadURL', `view-source:${store.url}`);
  store.hide();
}

const onInspectClick = () => {
  callViewMethod(store.tabId, 'webContents.inspectElement', 0, 0)
  store.hide();
}

const Navigation = () => (
  <Category>
    <MenuItem disabled={!store.navigationState.back} onClick={onBackClick}>
      <Icon icon={icons.back} size={22} />
      <Label hasIcon>Back</Label>
      <Hotkey>Alt+Left Arrow</Hotkey>
    </MenuItem>
    <MenuItem disabled={!store.navigationState.forward} onClick={onForwardClick}>
      <Icon icon={icons.forward} size={22} />
      <Label hasIcon>Forward</Label>
      <Hotkey>Alt+Right Arrow</Hotkey>
    </MenuItem>
    <MenuItem onClick={onRefreshClick}>
      <Icon icon={icons.refresh} size={20} />
      <Label hasIcon>Refresh</Label>
      <Hotkey>F5</Hotkey>
    </MenuItem>
  </Category>
)

const Multimedia = () => (
  <Category>
    <MenuItem>
      <Label>Save as</Label>
      <Hotkey>Ctrl+S</Hotkey>
    </MenuItem>
    <MenuItem onClick={onPrintClick}>
      <Icon icon={icons.print} size={18} />
      <Label hasIcon>Print</Label>
      <Hotkey>Ctrl+P</Hotkey>
    </MenuItem>
  </Category>
)

const Developer = () => (
  <Category>
    <MenuItem onClick={onViewSourceClick}>
      <Label>View page source</Label>
      <Hotkey>Ctrl+U</Hotkey>
    </MenuItem>
    <MenuItem onClick={onInspectClick}>
      <Icon icon={icons.extensions} size={18} />
      <Label hasIcon>Inspect</Label>
      <Hotkey>Ctrl+P</Hotkey>
    </MenuItem>
  </Category>
)

const App = observer(() => (
  <StyledApp visible={store.visible}>
    <StyledMenu>
      <Navigation />
      <Multimedia />
      <Developer />
    </StyledMenu>
  </StyledApp>
))

export default App;