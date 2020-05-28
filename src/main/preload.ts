import { webFrame } from "electron";
import { ERRORS } from "../renderer/app/constants/errors";

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