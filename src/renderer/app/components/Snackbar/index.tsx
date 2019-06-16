import React from 'react';
import { Button } from '../../../components/Button';
import { Actions, Root, Content, Image } from './style';
import { observer } from 'mobx-react';

export const Snackbar = observer(({ children, visible }: { visible: boolean, children: any }) => {
    return (
            <Root visible={visible}>
                {children}
            </Root>
    )
});