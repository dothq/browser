import React from "react";

import { observer } from "mobx-react";
import { StyledSmallCard, Headline } from "./style";

export const SmallCard = observer(({ background, headline, href }: { background: any; headline: string; href: any }) => (
    <StyledSmallCard background={background} href={href}>
        <Headline>{headline.substr(0, headline.lastIndexOf("-") + 0)}</Headline>
    </StyledSmallCard>
))