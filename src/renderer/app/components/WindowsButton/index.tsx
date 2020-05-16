import React from "react";
import { StyledWindowsButton } from "./style";

import dot from '../../store'

import { observer } from 'mobx-react';

const close = "M 0,0 0,0.7 4.3,5 0,9.3 0,10 0.7,10 5,5.7 9.3,10 10,10 10,9.3 5.7,5 10,0.7 10,0 9.3,0 5,4.3 0.7,0 Z"
const maximise = "M 0,0 0,10 10,10 10,0 Z M 1,1 9,1 9,9 1,9 Z"
const restore = "m 2,1e-5 0,2 -2,0 0,8 8,0 0,-2 2,0 0,-8 z m 1,1 6,0 0,6 -1,0 0,-5 -5,0 z m -2,2 6,0 0,6 -6,0 z"
const minimise = "M 0,5 10,5 10,6 0,6 Z"

export const WindowsButton = observer(({ type }: { type: 'close' | 'maximise' | 'restore' | 'minimise' }) => {
    let path = '';

    if(type == "close") path = close;
    if(type == "minimise") path = minimise;
    if(type == "maximise") path = maximise;
    if(type == "restore") path = restore;

    const events = dot.events;

    return (
        <StyledWindowsButton isClose={type == "close"} onClick={() => events.windowsOnClick(type)}>
            <svg aria-hidden="true" version="1.1" width="10" height="10">
                <path d={path}></path>
            </svg>
        </StyledWindowsButton>
    )
})