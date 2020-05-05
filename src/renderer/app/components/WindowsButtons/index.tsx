import React from "react";
import { WindowsButton } from "../WindowsButton";
import { StyledWindowsButtons } from "./style";

import dot from '../../store'
import { observer } from "mobx-react";

export const WindowsButtons = observer(() => (
    <StyledWindowsButtons>
        <WindowsButton type={"minimise"} />
        <WindowsButton type={"maximise"} />
        <WindowsButton type={"close"} />
    </StyledWindowsButtons>
))