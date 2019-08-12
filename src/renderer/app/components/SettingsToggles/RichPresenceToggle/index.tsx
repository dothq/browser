import * as React from 'react';
import { observer } from 'mobx-react';
import Switch from '@material-ui/core/Switch';
import { resolve } from 'path';
import { platform, homedir } from 'os';

const json = require("edit-json-file");
let file = json(resolve(homedir()) + '/dot/dot-options.json');

// if(!file.get("discordRPCEnabled")) {
//     file.set("discordRPCEnabled", true);
//     file.save()
// }

var toggled = file.get("discordRPCEnabled");
if(!toggled) {
    toggled = true;
}

class RPCSwitch extends React.Component {
        state = {
            rpcCheckedAlready: toggled,
            checkedA: true,
        };
    
        rpcHandleChange = (name: any) => (event: any) => {
            this.setState({ [name]: event.target.checked });
            if(name == "rpcCheckedAlready") {
                if(toggled == true) {
                    file.set("discordRPCEnabled", false);
                    file.save()
                }
                else {
                    file.set("discordRPCEnabled", true);
                    file.save()
                }
            }
        };
    
        render() {
            return (
                <Switch
                checked={this.state.rpcCheckedAlready}
                onChange={this.rpcHandleChange('rpcCheckedAlready')}
                value="checkedA"
                color="default"
                />
            );
        }
    }
  
export default RPCSwitch;