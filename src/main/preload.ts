import { webFrame, ipcRenderer } from "electron";
import { ERRORS } from "../renderer/app/constants/errors";

const tabId = process.argv.find(a => a.includes("--tab-id=")).split("--tab-id=")[1]

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

window.addEventListener('DOMContentLoaded', () => {
    if(window.location.host == "error") {
        const errorCode = parseInt(window.location.hash.replace(/#-/g, ""))
    
        webFrame.executeJavaScript('window')
            .then(w => {
                w.errorData = ERRORS[errorCode];
    
                if(process.env.ENV == "development") console.log(w.frames[0].window)
            })
    }
})