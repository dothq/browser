import React from "react"
import { StyledTab, StyledTabContent } from "./style"
import { Tab as ITab } from "../../mixins/tab"

const TabContent = ({ tab }: { tab: ITab }) => (
    <StyledTabContent>
        
    </StyledTabContent>
)

export const Tab = ({ tab }: { tab: ITab }) => {
    return (
        <StyledTab>
            <TabContent tab={tab} />
        </StyledTab>
    )
}