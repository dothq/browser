import * as React from 'react';

import { observer } from 'mobx-react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { Style, StyledApp } from './style';
import store from '../store';
import { Update } from '../components/Alert.Update';
import { Header } from '../components/Header';
import { News } from '../components/News';

const GlobalStyle = createGlobalStyle`${Style}`;

const blobHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <script>window.location.href = "$1"</script>
</head>
</html>
`

setInterval(() => {
    document.querySelectorAll("[href]").forEach(node => {
        if(!node.getAttribute("href").startsWith("blob:")) {
            const blob = new Blob([Buffer.from(blobHTML.replace("$1", node.getAttribute("href")), 'utf8')], { type: "text/html" })
            node.setAttribute("data-native-href", node.getAttribute("href"))
            node.href = URL.createObjectURL(blob)
        }
    });
}, 100)

export const App = observer(() => (
    <ThemeProvider theme={store.theme}>
        <StyledApp>
            <GlobalStyle />
            {/* <Update /> */}
            <Header />
            <News />
        </StyledApp>
    </ThemeProvider>
))