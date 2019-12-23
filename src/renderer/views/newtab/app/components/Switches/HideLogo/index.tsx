import * as React from 'react';
import Switch from 'react-switch';
import cookie from 'react-cookies';

class HideLogo_Switch extends React.Component {
  public state = {
    checked: false,
  };

  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked: any) {
    this.setState({ checked });

    if (checked == true) {
      cookie.save('shouldShowLogo', true, { path: '/' });
    }
    if (checked == false) {
      cookie.save('shouldShowLogo', false, { path: '/' });
    }
  }

  render() {
    return (
      <label>
        <Switch
          checked={this.state.checked}
          onChange={this.handleChange}
          onColor="#68c8ff"
          onHandleColor="#2575d9"
          handleDiameter={21}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={16}
          width={35}
          className="react-switch"
          id="material-switch"
        />
      </label>
    );
  }
}

export default HideLogo_Switch;
