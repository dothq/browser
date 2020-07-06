import { webFrame, app, remote, ipcRenderer } from "electron";
import { ERRORS } from "@dothq/errors";
import { WEBUI_PREFIX, NEWTAB_URL, WEBUI_SUFFIX } from "../ui/constants/web";
import tinycolor from 'tinycolor2';

const id = process.argv.find(a => a.includes("--tab-id=")).split("--tab-id=")[1]

if(window.location.href.startsWith(WEBUI_PREFIX)) {
    if(window.location.host == "error" || window.location.pathname.startsWith("/error.html")) {
        ipcRenderer.invoke('get-error-data', id).then(async (result) => {
            if(!result) document.body.innerHTML = ""

            const w = await webFrame.executeJavaScript('window');
    
            w.errorData = { error: ERRORS[parseInt(result.errorCode.toString().replace(/-/g, ""))], viewError: result }
        })
    }

    webFrame.executeJavaScript('window')
        .then(w => {
            w.dot = {
                version: remote.app.getVersion(),
                appName: remote.app.name,
                url: window.location,
                mode: process.env.ENV
            }
        })
}

document.addEventListener('mouseover', (e: Event) => {
    let cursor = window.getComputedStyle((e.target as Element)).getPropertyValue('cursor');

    if(cursor == "auto") {
        const tagName = (e.target as Element).tagName.toLowerCase()

        if(
            tagName == "h1" || 
            tagName == "h2" || 
            tagName == "h3" || 
            tagName == "h4" || 
            tagName == "h5" || 
            tagName == "h6" ||
            tagName == "span" ||
            tagName == "p"
        ) {
            cursor = "text"
        }
    }

    ipcRenderer.send('transport-active-cursor', cursor)
});

if(window.location.href.startsWith(`${WEBUI_PREFIX}newtab${WEBUI_SUFFIX}`)) {

}

document.addEventListener('DOMContentLoaded', () => {
    runScrollbarService()

    // let lastMutationType = ''

    // const observer = new MutationObserver((mutations, observer) => {
    //     const mutation = mutations[0]
    //     if(lastMutationType == mutation.type) return;
    //     lastMutationType = mutation.type

    //     console.log(mutation)

    //     if(mutation.type == 'childList') {
    //         runScrollbarService()
    //     }

    //     if(mutation.type == 'attributes') {
    //         runScrollbarService(mutation.target)
    //     }
    // })
    
    // observer.observe(window.document, { 
    //     attributes: true, 
    //     attributeFilter: ['style', 'class'],
    //     childList: true, 
    //     subtree: true
    // });

    window.addEventListener("message", (event) => {
        if(event.data == "focus-addressbar") {
            ipcRenderer.send('focus-addressbar')
        }
    }, false);
})

let existingKey = undefined;
let lastBackgroundColor = ''

const runScrollbarService = (target?: any) => {
    const backgroundColor = window.getComputedStyle(target ? target : document.body).getPropertyValue('background-color');
    if(backgroundColor == lastBackgroundColor) return;
    lastBackgroundColor = backgroundColor;
    const isDark = tinycolor(backgroundColor).isDark()

    if(typeof(existingKey) !== "undefined") {
        webFrame.removeInsertedCSS(existingKey)
        existingKey = undefined
    }
    existingKey = webFrame.insertCSS(`::-webkit-scrollbar {background-color: ${isDark ? '#131313' : '#f1f1f1'};} ::-webkit-scrollbar-thumb {transition: 0.3s background-color;background-color: ${isDark ? '#454545' : '#9b9b9b'};border-radius: 10px;border: solid ${isDark ? '#131313' : '#f1f1f1'};} ::-webkit-scrollbar-corner {background-color: ${isDark ? '#131313' : '#f1f1f1'};}`)
}

// setInterval(runScrollbarService, 50)