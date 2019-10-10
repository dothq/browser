import * as React from 'react';
import { StyledSearch } from './style';
import { Tab } from './../../../app/models/tab';
import OmniboxSearch from '../components/Search';

class Search extends React.Component {
  public props = {
    style: '',
  };

  public tabContents: Tab;

  constructor(props: any) {
    super(props);
  }

  render() {
    const { style } = this.props;

    return (
      <OmniboxSearch style={style} isFixed={false} tab={this.tabContents} />
    );
  }
}

export default Search;
