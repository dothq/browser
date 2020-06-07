import { ElectronBlocker } from '@cliqz/adblocker-electron';
import fetch from 'cross-fetch';
import { promises as fs } from 'fs';
import Electron, { session } from 'electron';
import { log } from '@dothq/log';

export class AdblockService {
    public blocker: ElectronBlocker

    private running: boolean = false;

    start(session: Electron.Session) {
        if(!this.blocker) return;
        if(this.running) return;

        this.blocker.enableBlockingInSession(session)

        this.running = true;
    }

    stop(session: Electron.Session) {
        if(!this.blocker) return;
        if(!this.running) return;

        this.blocker.enableBlockingInSession(session)

        this.running = false;
    }

    constructor() {
        const t = Date.now()

        ElectronBlocker.fromPrebuiltAdsAndTracking(fetch, {
            path: `Adblock Filters`,
            read: fs.readFile,
            write: fs.writeFile,
        }).then((blocker) => {
            this.blocker = blocker

            log(`Loaded \`adblock\` service in ${Date.now() - t}ms`, { caller: 'Services' })

            this.start(session.fromPartition('persist:view'))
        })
    }
}