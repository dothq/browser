

import * as dns from 'dns';

export class ConnectivityStore {
    public store;

    private connectivityStatus: number = -1;
    private timeSinceLastCheck: number = Date.now();

    public checkForConnection() {
        return new Promise((resolve, reject) => {
            if((Date.now() - this.timeSinceLastCheck) <= 5000) {
                return resolve({ connected: this.connectivityStatus })
            } else {
                dns.promises.resolve('example.com')
                    .then(() => {
                        this.connectivityStatus = 1;
                    })
                    .catch(() => {
                        this.connectivityStatus = 0;
                    })

                return resolve({ connected: this.connectivityStatus })
            }
        })
    }

    constructor(store) {
        this.store = store;
    }
}