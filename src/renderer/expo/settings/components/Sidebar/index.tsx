import React from 'react';
import { StyledSidebar, SidebarContainer, SidebarItem } from "./style";

import { observer } from 'mobx-react';
import { Icon } from '../../../../app/components/Icon';

import dot from '../../store';

export const Sidebar = observer(() => {
    const selectSection = (section) => {
        dot.selectedSection = section;
    }

    return (
        <StyledSidebar>
            <SidebarContainer>
                <SidebarItem selected={dot.selectedSection == 'home'} onClick={() => selectSection('home')}>
                    <Icon icon={"sliders"} size={18} />
                </SidebarItem>
                <SidebarItem selected={dot.selectedSection == 'appearance'} onClick={() => selectSection('appearance')}>
                    <Icon icon={"droplet"} size={18} />
                </SidebarItem>
                <SidebarItem selected={dot.selectedSection == 'search'} onClick={() => selectSection('search')}>
                    <Icon icon={"search"} size={18} />
                </SidebarItem>
                <SidebarItem selected={dot.selectedSection == 'downloads'} onClick={() => selectSection('downloads')}>
                    <Icon icon={"download"} size={19} />
                </SidebarItem>
                <SidebarItem selected={dot.selectedSection == 'languages'} onClick={() => selectSection('languages')}>
                    <Icon icon={"globe"} size={18} />
                </SidebarItem>
                <SidebarItem selected={dot.selectedSection == 'about'} onClick={() => selectSection('about')}>
                    <Icon icon={"user"} size={18} />
                </SidebarItem>
                <SidebarItem selected={dot.selectedSection == 'about'} onClick={() => selectSection('about')}>
                    <Icon icon={"info"} size={18} />
                </SidebarItem>
            </SidebarContainer>
        </StyledSidebar>
    )
})