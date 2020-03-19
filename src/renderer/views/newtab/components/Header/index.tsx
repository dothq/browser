import * as React from 'react';

import { observer } from 'mobx-react';
import { StyledHeader, Container, ContentContainer, Dot } from './style';
import { Bubbles } from '../Bubbles';

@observer
export class Header extends React.Component {
    componentDidMount() {
        window.addEventListener("scroll", () => {
            if(window.scrollY <= 550) {
                document.getElementById("webui-newtab-header-container").style.filter = `brightness(${1 - window.scrollY/400})`
                document.getElementById("webui-newtab-header-container").style.backgroundSize = `${100 + window.scrollY/25}%`
            }
        })
    }

    render() {
        return (
            <StyledHeader>
                <Container id="webui-newtab-header-container" />
                <ContentContainer>
                        <Dot />
                        <Bubbles />
                </ContentContainer>
            </StyledHeader>
        )
    }
}