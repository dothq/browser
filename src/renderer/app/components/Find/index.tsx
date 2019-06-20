import * as React from 'react';
import {
  StyledFind,
  Input,
  Button,
  Buttons,
  SearchIcon,
  Occurrences,
} from './style';
import { observer } from 'mobx-react';
import { icons } from '../../constants';
import store from '../../store';
const { dialog } = require('electron')

const close = () => {
  const { selectedTab } = store.tabs;
  selectedTab.findVisible = false;
  selectedTab.callViewMethod('webContents.stopFindInPage', 'clearSelection');
  selectedTab.findOccurrences = '0/0';
};

const onInput = async () => {
  const { value } = store.findInputRef.current;
  const { selectedTab } = store.tabs;

  selectedTab.findText = value;

  if (value === '') {
    selectedTab.callViewMethod('webContents.stopFindInPage', 'clearSelection');
    selectedTab.findOccurrences = '0/0';
    return;
  }

  if(value.toLocaleLowerCase() === "f to pay respects") {
    var url = "https://www.youtube.com/watch?v=NfT1XLD51zc"
    store.tabs.addTab({url, active: true });
  }

  if(value.toLocaleLowerCase() === "somebody once told me") {
    var url = "https://www.youtube.com/watch?v=g7_VlmEamUQ"
    store.tabs.addTab({url, active: true });
  }

  if(value.toLocaleLowerCase() === "sodium chloride") {
    var url = "https://www.youtube.com/watch?v=kbBgx0BEuuI"
    store.tabs.addTab({url, active: true });
  }

  if(value.toLocaleLowerCase() === "never gonna give you up") {
    var url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    store.tabs.addTab({url, active: true });
  }

  if(value.toLocaleLowerCase() === "heres the mother fucking tea") {
    var url = "https://www.youtube.com/watch?v=h_6QQYWoUjE"
    store.tabs.addTab({url, active: true });
  } 

  if(value.toLocaleLowerCase() === "congrats tseries") {
    var url = "https://www.youtube.com/watch?v=PHgc8Q6qTjc"
    store.tabs.addTab({url, active: true });
  } 

  if(value.toLocaleLowerCase() === "welcome to the hypixel zoo") {
    var url = "https://www.youtube.com/watch?v=ihZKUUxKWYA"
    store.tabs.addTab({url, active: true });
  } 

  if(value.toLocaleLowerCase() === "take me home country roads") {
    var url = "https://www.youtube.com/watch?v=1vrEljMfXYo"
    store.tabs.addTab({url, active: true });
  }
  
  if(value.toLocaleLowerCase() === "avengers endgame spoilers") {
    var url = "https://www.youtube.com/watch?v=HzyZYhit-sg"
    store.tabs.addTab({url, active: true });
  }

  if(value.toLocaleLowerCase() === "shooting stars") {
    var url = "https://www.youtube.com/watch?v=O-MQC_G9jTU"
    store.tabs.addTab({url, active: true });
  }

  if(value.toLocaleLowerCase() === "burger king foot lettuce") {
    var url = "https://www.youtube.com/watch?v=zpWbXltP43o"
    store.tabs.addTab({url, active: true });
  }


  const requestId = await selectedTab.callViewMethod(
    'webContents.findInPage',
    value,
  );
  selectedTab.findRequestId = requestId;
};

const move = (forward: boolean) => async () => {
  const { selectedTab } = store.tabs;
  const { value } = store.findInputRef.current;
  if (value === '') return;

  const requestId = await selectedTab.callViewMethod(
    'webContents.findInPage',
    value,
    {
      forward,
      findNext: true,
    },
  );

  selectedTab.findRequestId = requestId;
};

const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === 'Enter') {
    move(true)();

    var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;

    if(regex.test(store.findInputRef.current.value)) {
      var url = store.findInputRef.current.value
      store.tabs.addTab({url, active: true });
      close();
    }

  }
};

const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === 'Escape') {
    close();
  }
};

export const Find = observer(() => {
  const { selectedTab } = store.tabs;

  let value = '';

  if (selectedTab) {
    value = selectedTab.findText;
  }

  return (
    <StyledFind
      visible={selectedTab && selectedTab.findVisible}
      onKeyUp={onKeyUp}
    >
      <SearchIcon style={{ filter: 'none' }} />
      <Input
        autoFocus
        value={value}
        onKeyPress={onKeyPress}
        onChange={onInput}
        ref={store.findInputRef}
        placeholder="Find in page"
        id="find"
      />
      <Occurrences>{selectedTab && selectedTab.findOccurrences}</Occurrences>
      <Buttons>
        <Button onClick={move(false)} icon={icons.up} size={20} />
        <Button onClick={move(true)} icon={icons.down} size={20} />
        <Button onClick={close} icon={icons.close} size={16} />
      </Buttons>
    </StyledFind>
  );
});
