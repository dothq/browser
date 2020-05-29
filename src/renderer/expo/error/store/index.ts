import { observable } from 'mobx';

import { ERRORS } from '../../../app/constants/errors'
import { parse } from 'url';

class Dot {
    @observable
    public error = null;

    constructor() {
        window.addEventListener('DOMContentLoaded', () => {
            const data = (window as any).errorData

            const url = parse(data.viewError.validatedURL);

            data.error.summary = data.error.summary.replace(/%url/g, `[b]${url.hostname}[/b]`)

            this.error = data.error

            document.title = url.hostname
        })
    }
}

export default new Dot();