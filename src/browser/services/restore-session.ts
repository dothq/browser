import { log } from '@dothq/log';

interface SavedTab {
    url: string;
    favicon: string;
    title: string;
}

export class RestoreSessionService {
    public tabsOpen: SavedTab[] = []

    private running: boolean = false;

    start() {
        if(this.running) return;

        this.tabsOpen = []
    }

    stop() {
        if(!this.running) return;

        this.tabsOpen = []

        this.running = false;
    }

    constructor() {
        const t = Date.now()

        log(`Loaded \`restore-session\` service in ${Date.now() - t}ms`, { caller: 'Services' })

        this.start()
    }
}