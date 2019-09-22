import { observer } from 'mobx-react';
import * as React from 'react';
import { WindowsButtons } from '~/renderer/app/components/WindowsButtons';
import { StyledNewTab } from './style';

export const NewTab = observer(() => {
  return (
    <StyledNewTab>
      <WindowsButtons />
    </StyledNewTab>
  );
});
