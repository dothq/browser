import { AdblockService } from "./adblock";
import { RestoreSessionService } from "./restore-session";

export class ServiceManager { 
    public adblock: AdblockService
    public restoreSession: RestoreSessionService

    private load(name: string, service: any) {
        this[name] = new service;
    }

    constructor() {
        this.load('adblock', AdblockService)
        this.load('restoreSession', RestoreSessionService)
    }
}