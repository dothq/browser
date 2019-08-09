import * as React from 'react';
import { observer } from 'mobx-react';

import { StyledApp } from './style';
import { Menu } from './components/Menu';
import * as ReactDOM from 'react-dom';

export const App = observer(() => {
    return (
        <StyledApp>
            <Menu />
        </StyledApp>
    )
});

ReactDOM.render(<App />, document.getElementById("app"))


