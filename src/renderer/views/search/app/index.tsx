import * as React from 'react';
import { Search } from '../components/Search';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Style } from './style';
import store from '../store';
import { observer } from 'mobx-react';
import { getTheme } from '~/shared/utils/themes';

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
    
    const theme = () => {
      if((window as any).settings) {
        return getTheme((window as any).settings.appearance.theme)
      } else {
        return getTheme("light");
      }
    }

    return (
      <ThemeProvider theme={theme()}>
        <>
          <GlobalStyle />
          <Search style={style} visible={store.visible} />
        </>
      </ThemeProvider>
    );
  }
}

export default App;
