import * as React from 'react';
import { Search } from '../components/Search';

import { createGlobalStyle } from 'styled-components';
import { Style } from './style';
import store from '../store';
import { observer } from 'mobx-react';

const GlobalStyle = createGlobalStyle`${Style}`;

interface Props {
  style?: any
}

@observer
class App extends React.Component<Props, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { style } = this.props;

    return (
      <>
        <GlobalStyle />
        <Search style={style} visible={store.visible} />
      </>
    );
  }
}

export default App;
