import * as React from 'react';

import { observer } from 'mobx-react';
import { icons } from '~/renderer/views/app/constants';
import store from '../../store';
import { Alert } from '../Alert';
import { Action } from '../Alert/style';

export const Update = observer(() => (
    <Alert 
        visible={store.alertVisible} 
        icon={icons.ring} 
        title={"Update Available"}
        text={"A browser update is available."}
    >
        <Action color={store.theme["webui-newtab-hyperlink-color"]}>Update</Action>
        <Action color={store.theme["webui-newtab-inactive-hyperlink-color"]}>Not now</Action>
    </Alert>
))