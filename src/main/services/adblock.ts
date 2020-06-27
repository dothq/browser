import { ElectronBlocker, Request } from '@cliqz/adblocker-electron';
import fetch from 'cross-fetch';
import { promises as fs } from 'fs';
import Electron, { session } from 'electron';
import { log } from '@dothq/log';
import { appWindow } from '..';

export class AdblockService {
    public blocker: ElectronBlocker

    private running: boolean = false;

    start(session: Electron.Session) {
        if(!this.blocker) return;
        if(this.running) return;

        this.blocker.enableBlockingInSession(session)

        this.running = true;

        this.blocker.on('request-blocked', (req: Request) => {
            const wcID = req._originalRequestDetails.webContentsId;
            const view = appWindow.views.find(v => v.view && v.view.webContents.id == wcID)
            if(!view) return;

            appWindow.window.webContents.send(`blocked-ad-${view.id}`)
        })
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