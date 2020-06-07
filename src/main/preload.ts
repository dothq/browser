import { webFrame, app, remote, ipcRenderer } from "electron";
import { ERRORS } from "@dothq/errors";
import { EXPO_PREFIX, NEWTAB_URL, EXPO_SUFFIX } from "../renderer/constants/web";
import { focusAddressbar } from "./tools/app";

const id = process.argv.find(a => a.includes("--tab-id=")).split("--tab-id=")[1]

if(window.location.href.startsWith(EXPO_PREFIX)) {
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

if(window.location.href.startsWith(`${EXPO_PREFIX}newtab${EXPO_SUFFIX}`)) {

}

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener("message", (event) => {
        if(event.data == "focus-addressbar") {
            console.log(event)
            ipcRenderer.send('focus-addressbar')
        }
    }, false);
})