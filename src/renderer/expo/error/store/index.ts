import { observable } from 'mobx';

import { ERRORS } from '../../../app/constants/errors'

class Dot {
    @observable
    public error = null;

    constructor() {
        setTimeout(() => {
            if((window as any).errorData) {
                const error = (window as any).errorData
    
                this.error = error
            } else {
                document.write("")
            }
        }, 4000);
    }
}

export default new Dot();