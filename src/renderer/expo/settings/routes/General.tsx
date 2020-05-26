import React from "react";
import { Avatar, Title } from "./style";

export const GeneralView = () => (
    <div style={{ display: 'flex', marginTop: '2.5rem' }}>
        <Avatar src={"https://cdn.dothq.co/assets/defaultAvatar.png"} size={82} />
        <div style={{ marginLeft: '18px' }}>
            <Title>Hey, EnderDev</Title>
        </div>
    </div>  
)