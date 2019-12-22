import * as React from 'react';
import {
  StyledSearchBox,
  SearchContainer,
  SearchIcon,
  Input,
} from './style';
import store from '../../store';

export class Search extends React.Component {
  public props: any = {
    isFixed: false,
    style: '',
    visible: false
  };

  constructor(props: any) {
    super(props);
  }

  public state = {
    focused: false
  };

  onChange(e: any) {
    store.details.url = e.target.value;
  }

  render() {
    const { isFixed, style, visible } = this.props;

    return (
      <StyledSearchBox isFixed={isFixed} style={style} isFocused={true} visible={visible}>
        <SearchContainer>
          <SearchIcon isFocused={true} />
          <Input
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            onChange={() => this.onChange(event)}
            defaultValue={store.details.url}
            placeholder="Search Google or enter address"
            ref={store.inputRef}
          />
        </SearchContainer>
      </StyledSearchBox>
    );
  }
}
