import React from "react";

import { observer } from "mobx-react";
import { StyledFakeSearch, FakeInput } from "./style";
import { Icon } from "@dothq/icon";
import { IconButton } from "../IconBar/style";

export const FakeSearch = observer(() => {
    const onFakeInputKeyDown = (e) => {
        e.target.blur()

        window.postMessage("focus-addressbar", window.location.href)
    }

    return (
        <StyledFakeSearch>
            <FakeInput placeholder={"Search the web"} onKeyDown={onFakeInputKeyDown} />
            <IconButton>
                <Icon icon={"arrow-right"} size={26} style={{ margin: '12px' }} />
            </IconButton>
        </StyledFakeSearch>
    )
})