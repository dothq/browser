import Endb from 'endb';
import EndbSqlite from '@endb/sqlite';

const createConnection = async (name, defaults?: any) => {
    const store = new EndbSqlite({
        uri: `sqlite://${__dirname}\\storage.db`,
        table: name,
        busyTimeout: 10000
    });

    const db = new Endb(({ store, namespace: "dot" } as Endb.EndbOptions<any>));

    if(!defaults) return db;

    for (const def of defaults) {
        const key = Object.keys(def)[0];
        const value = def[key]

        const exists = await db.has(key)

        if(exists) return;
        db.set(key, value)
    }
    return db;
}

export class Storage {
    public settings: Endb<any>;
    public history: Endb<any>;
    public bookmarks: Endb<any>;
    public favicons: Endb<any>;

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