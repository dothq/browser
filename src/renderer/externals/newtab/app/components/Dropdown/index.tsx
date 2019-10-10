import * as React from 'react';
import { StyledDropdown, DropdownFamily } from './style';
import onClickOutside from 'react-onclickoutside';

class Dropdown extends React.Component {
  public props = {
    x: 0,
    y: 0,
    width: 0,
    visible: false,
    children: [],
    darkMode: false,
  };

  public visible: boolean = this.props.visible;

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <StyledDropdown
        x={this.props.x}
        y={this.props.y}
        width={this.props.width}
        visible={this.props.visible}
        darkMode={this.props.darkMode}
      >
        <DropdownFamily>{this.props.children}</DropdownFamily>
      </StyledDropdown>
    );
  }
}

export default Dropdown;
