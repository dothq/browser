import React from "react";

import { observer } from "mobx-react";
import { StyledLargeCard, Headline } from "./style";

export const LargeCard = observer(({ background, headline, href }: { background: any; headline: string; href: any }) => (
    <StyledLargeCard background={background} href={href}>
        <Headline>{headline.substr(0, headline.lastIndexOf("-") + 0)}</Headline>
    </StyledLargeCard>
))