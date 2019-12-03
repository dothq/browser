import * as React from 'react';
import { observer } from "mobx-react";
import { DialogModal, DialogBackdrop, DialogContainer, DialogRoot, DialogTitle } from "./style";
import { Title } from "../Overlay/style";
import store from '../../store';
import { preventHiding } from '../Overlay';

export const DialogPopup = observer(({ visible, onClick, children }: { visible: any; onClick?: (e: React.MouseEvent<HTMLDivElement>) => void; children: any; }) => {
  return (
    <DialogModal visible={visible}>
      <DialogBackdrop  />
      <DialogContainer onClick={onClick}>
        <DialogRoot onClick={preventHiding}>
          {children}
        </DialogRoot>
      </DialogContainer>
    </DialogModal>
  );
});