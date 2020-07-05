import Database from 'keyv';
import KeyvFile from 'keyv-file';

import { resolve } from 'path';
import { USER_DATA } from '../constants/storage';
 
const createConnection = async (name, defaults?: any) => {
    const cleanName = name[0].toUpperCase() + name.slice(1)

    const db: Database = new Database({
        namespace: name,
        store: new KeyvFile({
            filename: resolve(USER_DATA, cleanName),
            expiredCheckDelay: 300000
        })
    })

    db.set("v", 1)

    if(!defaults) return db;

    for (const def of defaults) {
        const key = Object.keys(def)[0];
        const value = def[key]

        const exists = await db.get(key)

        if(exists) return;
        db.set(key, value)
    }

    return db;
}

export class Storage {
    public settings: Database;
    public history: Database;
    public bookmarks: Database;
    public favicons: Database;

    constructor() {
        this.init()
    }

    public async init() {
        this.settings = await createConnection("settings", [{ 'appearance.theme': 'light' }]);
        this.history = await createConnection("history");
        this.bookmarks = await createConnection("bookmarks");
        this.favicons = await createConnection("favicons");
    }
}