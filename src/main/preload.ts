import { webFrame, app, remote, ipcRenderer } from "electron";
import { ERRORS } from "../renderer/app/constants/errors";
import { EXPO_PREFIX } from "../renderer/constants/web";

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
