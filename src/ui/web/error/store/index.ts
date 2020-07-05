import { observable } from 'mobx';

import axios from 'axios';
import { parse } from 'url';

class Dot {
    @observable
    public error = null;

    @observable
    public viewError = null;

    private async getSSLCertificate(url) {
        const res = await axios.get(`https://dothq.co/api/browser/cert/${url}`)

        return res.data
    }

    constructor() {
        window.addEventListener('DOMContentLoaded', async () => {
            const data = (window as any).errorData

            const url = parse(data.viewError.validatedURL);

            document.title = url.hostname;

            data.error.summary = data.error.summary.replace(/%url/g, `[b]${url.hostname}[/b]`)
            
            this.error = data.error
            this.viewError = data.viewError

            document.body.innerHTML = document.body.innerHTML.replace(/%certExpiredWhen/g, `<b>Calculating...</b>`)

            this.error.certificate = await this.getSSLCertificate(url.hostname)
            console.log(this.error)

            document.body.innerHTML = document.body.innerHTML.replace(/Calculating.../g, data.error.certificate.certificateExpired)
        })
    }
}

export default new Dot();
