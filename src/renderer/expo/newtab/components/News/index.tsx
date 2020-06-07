import React from "react";

import { observer } from "mobx-react";
import { StyledNews } from "./style";
import { LargeCard } from "../Cards/Large";
import { SmallCard } from "../Cards/Small";

export const News = observer(() => (
    <StyledNews>
        <LargeCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <LargeCard />
        <LargeCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <LargeCard />
    </StyledNews>
))