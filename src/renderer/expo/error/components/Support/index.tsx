import React from 'react';

import { StyledSupport, SupportHeading, SupportItem, SupportContainer } from "./style";

export const Support = () => (
    <StyledSupport>
        <SupportContainer>
            <SupportHeading>Here’s what you can try to get connected again:</SupportHeading>
            <SupportItem>• Check the cables on your router and modem.</SupportItem>
            <SupportItem>• Reconnecting to your Wi-Fi network</SupportItem>
        </SupportContainer>
    </StyledSupport>
)