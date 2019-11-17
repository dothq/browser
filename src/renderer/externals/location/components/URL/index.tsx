import * as React from 'react';
import { observer } from 'mobx-react';

import { StyledURL, Text } from './style';
import store from '../../store';

export const URL = observer(() => {
    return (
        <StyledURL>
            <Text>{store.url}</Text>
        </StyledURL>
    )
})