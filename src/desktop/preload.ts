import { webFrame, remote, ipcRenderer } from "electron";
import { ERRORS } from "@dothq/errors";
import { WEBUI_PREFIX } from "../ui/constants/web";

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

document.addEventListener('DOMContentLoaded', () => {
    runScrollbarService()

    window.addEventListener("message", (event) => {
        if(event.data == "focus-addressbar") {
            ipcRenderer.send('focus-addressbar')
        }
    }, false);
})

const runScrollbarService = () => {
    webFrame.insertCSS(`::-webkit-scrollbar {background-color: #f1f1f1} ::-webkit-scrollbar-thumb {transition: 0.3s background-color;background-color: #9b9b9b;border-radius: 10px;border: solid #f1f1f1} ::-webkit-scrollbar-corner {background-color: #f1f1f1}`)
}