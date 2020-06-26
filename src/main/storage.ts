import Datastore from 'nedb';

import { resolve } from 'path';
import { app } from 'electron';

const databases = ['history', 'bookmarks', 'downloads', 'passwords', 'settings', 'session', 'favicons']

export class Storage {
    public db = {
        history: new Datastore,
        bookmarks: new Datastore,
        downloads: new Datastore,
        passwords: new Datastore,
        settings: new Datastore,
        session: new Datastore,
        favicons: new Datastore
    }

    constructor() {
        for (const item of databases) {
            this.db[item] = new Datastore({ 
                filename: resolve(app.getPath('userData'), 'User Data', item),
                timestampData: true
            });

            this.db[item].loadDatabase();
        }
    }
}