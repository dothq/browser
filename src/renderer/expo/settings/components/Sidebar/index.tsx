import React from 'react';
import { StyledSidebar, Container } from "./style";

import { observer } from 'mobx-react';

import { Icon } from '@dothq/icon'
import { IconButton } from '../IconButton';
import { H1 } from '../Typography';

import dot from '../../store'

const selectSection = (sectionId) => {
    if(sectionId == "ADVANCED_DIVIDER") {
        dot.sections.ADVANCED_DIVIDER.flipped = !dot.sections.ADVANCED_DIVIDER.flipped;

        return Object.entries(dot.sections).forEach(section => {
            const s = (section[1] as any)

            if(s.isHiddenByDefault) {
                
                return s.visible = !s.visible
            }
        })
    }

    dot.selectedSection = sectionId
}

export const Sidebar = observer(() => (
    <StyledSidebar>
        <Container>
            {Object.entries(dot.sections).map(section => (
                <IconButton 
                    onClick={() => selectSection(section[0])} 
                    key={section[0]} 
                    id={"TAB_" + section[0]} 
                    icon={section[1].icon} 
                    size={24} 
                    noFill 
                    className={`sb-tab-item ${dot.selectedSection == section[0] ? 'sb-tab-selected' : ''}`} 
                    style={{ 
                        display: (section[1] as any).visible == false ? 'none' : '',
                        transform: (section[1] as any).flipped == true ? 'rotate(180deg)' : ''
                    }}
                />
            ))}

            <div className={"sb-end"}>
                <IconButton id={"TAB_EXTENSIONS"} icon={"package"} size={24} noFill className={"sb-tab-item"} />
                <IconButton 
                    onClick={() => selectSection("ABOUT_DOT_BROWSER")}  
                    id={"TAB_ABOUT_DOT_BROWSER"} 
                    icon={"info"} 
                    size={24} 
                    noFill 
                    className={`sb-tab-item ${dot.selectedSection == "ABOUT_DOT_BROWSER" ? 'sb-tab-selected' : ''}`} 
                />
            </div>
        </Container>
    </StyledSidebar>
))