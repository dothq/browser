import { AdblockService } from "./adblock";

export class ServiceManager { 
    public adblock: AdblockService

    private load(name: string, service: any) {
        this[name] = new service;
    }

    constructor() {
        this.load('adblock', AdblockService)
    }
}