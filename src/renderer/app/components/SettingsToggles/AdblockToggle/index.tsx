import * as React from 'react';
import { observer } from 'mobx-react';
import Switch from '@material-ui/core/Switch';
import { resolve } from 'path';
import { platform, homedir } from 'os';

const editJsonFile = require("edit-json-file");
let file = editJsonFile(resolve(homedir()) + '/dot/dot-options.json');

// if(!file.get("adblockEnabled")) {
//     file.set("adblockEnabled", true);
//     file.save()
// }

var toggled = file.get("adblockEnabled");
if(!toggled) {
    toggled = true;
}

class AdbSwitch extends React.Component {
        state = {
            adbCheckedAlready: toggled,
            checked: true,
        };
    
        handleChange = (name: any) => (event: any) => {
            this.setState({ [name]: event.target.checked });
            if(name == "adbCheckedAlready") {
                if(toggled == true) {
                    file.set("adblockEnabled", false);
                    file.save()
                }
                if(toggled == false) {
                    file.set("adblockEnabled", true);
                    file.save()
                }
            }
        };
    
        render() {
            return (
                <Switch
                checked={this.state.adbCheckedAlready}
                onChange={this.handleChange('adbCheckedAlready')}
                value="checkedA"
                color="primary"
                />
            );
        }
    }
  
export default AdbSwitch;