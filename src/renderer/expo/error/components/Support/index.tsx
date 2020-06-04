import React from 'react';

import { StyledSupport, SupportHeading, SupportItem, SupportContainer } from "./style";

import { v4 as uuidv4 } from 'uuid';

import { parse } from 'url';

import dot from '../../store'
import { observer } from 'mobx-react';

export const Support = observer(() => (
    <StyledSupport>
        <SupportContainer>
            <SupportHeading>{dot.error && dot.error.solutionHeading}</SupportHeading>
            {dot.error && dot.error.solutions.map(solution => (
                <SupportItem dangerouslySetInnerHTML={{ __html: `• ${solution.replace(/%url/g, `<strong>${dot.viewError && parse(dot.viewError.validatedURL).host}</strong>`)}` }} key={uuidv4()} />
            ))}
        </SupportContainer>
    </StyledSupport>
))