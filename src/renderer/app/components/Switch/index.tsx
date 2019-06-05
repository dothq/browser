import * as React from 'react';
import Switch from '@material-ui/core/Switch';

class OptSwitch extends React.Component {
    state = {
      checked: true
    };
  
    handleChange = (name: any) => (event: any) => {
      this.setState({ [name]: event.target.checked });
      if(name == "checked") {
        
      }
    };
  
    render() {
      return (
        <Switch
          checked={this.state.checked}
          onChange={this.handleChange('dotLauncherToggle')}
          value="checkedA"
          color="primary"
        />
      );
    }
  }
  
  export default OptSwitch;