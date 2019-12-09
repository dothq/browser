import * as React from 'react';
import { StyledPrinters, Printer } from './style';
import { remote } from 'electron';
import { Icon } from '../../app/style';
import { Heading } from '../Typography/style';
import { icons } from '../../../app/constants';

export class Printers extends React.Component {
    render() {
        const printers = remote.webContents.getFocusedWebContents().getPrinters()
        console.log(printers)

        return (
            <StyledPrinters>
                {printers.map(item => (
                    <Printer key={Math.floor(Math.random()*16777215).toString(16)}>
                        <Icon icon={icons.page} />
                        <Heading>{item.name}</Heading>
                    </Printer>
                ))}
            </StyledPrinters>
        )
    }
}