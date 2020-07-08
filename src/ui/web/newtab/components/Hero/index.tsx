import React from "react";

import { observer } from "mobx-react";
import { StyledHero, GreetingTitle } from "./style";
import { IconBar } from "../IconBar";
import { FakeSearch } from "../FakeSearch";

export const Hero = observer(() => (
    <StyledHero>
        <IconBar />
        <GreetingTitle>
            Good morning
        </GreetingTitle>
        <FakeSearch />
    </StyledHero>
))