import * as React from 'react';

import { observer } from "mobx-react-lite";
import { Button, MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { StyledButtons } from './style';

const regex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#1a73e8'
      }
    }
})

const onReloadClick = () => {
    const url = window.location.hash.split("#")[1];

    if(!regex.test(url)) return window.location.href = "about:blank";

    window.location.href = url;
}

export const Buttons = observer(() => {
    return (
        <MuiThemeProvider theme={theme}>
            <StyledButtons>
                <Button variant="contained" color="primary" onClick={onReloadClick}>Reload</Button>
                <Button variant="outlined" color="primary">View more</Button>
            </StyledButtons>
        </MuiThemeProvider>
    )
})