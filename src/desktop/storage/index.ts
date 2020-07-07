import { 
    createRxDatabase, 
    addRxPlugin, 
    RxDatabase, 
    RxCollection
} from 'rxdb';

import { resolve } from 'path';
import { USER_DATA } from '../../constants/storage';

import { schemas } from './schemas';

import { v4 as uuidv4 } from 'uuid';

addRxPlugin(require('pouchdb-adapter-node-websql'));

const createConnection = async (name, collections: string[]) => {
    const cleanName = name[0].toUpperCase() + name.slice(1)

    const db = await createRxDatabase({
        name: resolve(USER_DATA, cleanName),
        adapter: 'websql'
    });

    for (const collection of collections) {
        await db.collection({
            name: collection,
            schema: schemas[collection]
        }); 
    }

    return db;
}

export class Storage {
    public db: RxDatabase;

    constructor() {
        this.init()
    }

    public async get(collection: string, query: any) {
        const value = Object.values(query)[0];
        const key = Object.keys(query)[0]

        const q = this.db.collections[collection].find().where(key).eq(value);

        const results = await q.exec();

        const res = []

        for (const r of results) {
            const document = this.getValue(r)

            res.push(document.value)
        }

        return res;
    }

    public async set(collection: string, query: any, update: any) {
        const value = Object.values(query)[0];
        const key = Object.keys(query)[0]

        const q = this.db.collections[collection].find().where(key).eq(value);

        await q.update(update)

        await q.exec();

        return true;
    }

    public async insert(collection: string, document: any) {
        if(!document.id && schemas[collection].properties.id) document.id = uuidv4()

        const q = this.db.collections[collection].insert(document)

        return true;
    }
    
    public async getAll(collection: string) {
        const q = this.db.collections[collection].find();

        const results = await q.exec();

        const res = []

        for (const r of results) {
            const document = this.getValue(r);

            res.push(document)
        }

        return res;
    }

    private getValue(queryResult: any) {
        const document = queryResult['_dataSync$']._value;

        delete document._rev

        return document
    }

    public async init() {
        this.db = await createConnection("storage", ['settings', 'history']);
    }
}