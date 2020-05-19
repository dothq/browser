import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import { app } from 'electron';
import { resolve } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { setAppDataLocation } from './tools/app';
import { v4 as uuidv4 } from 'uuid';

export class Storage {    
    public databases = {
        history: null,
        bookmarks: null
    }
    
    public add(database: 'history' | 'bookmarks', data: any) {
        if(!data.id) data.id = uuidv4()

        this.databases[database].get('r')
            .push(data)
            .write()

        return this.get(database, { id: data.id })
    }

    public remove(database: 'history' | 'bookmarks', id: string) {
        this.databases[database].get('r')
            .remove({ id })
            .write()

        return this.exists(database, id);
    }

    public get(database: 'history' | 'bookmarks', query: any) {
        return this.databases[database].get('r')
            .find(query)
            .value()
    }

    public exists(database: 'history' | 'bookmarks', id: string) {
        const exists = this.get(database, { id })

        return typeof(exists) == "undefined" ? true : false;
    }

    public update(database: 'history' | 'bookmarks', id: string, data: any) {
        this.databases[database].get('r')
            .find({ id })
            .assign({ ...data })
            .write()

        return this.get(database, { id: id })
    }

    private userData = null

    private connect(database: 'history' | 'bookmarks') {
        const adapter = new FileSync(resolve(this.userData, `${database}.db`))
        this.databases[database] = low(adapter)

        this.databases[database].defaults({ r: [] }).write()
    }

    constructor() {
        setAppDataLocation()
        this.userData = resolve(app.getPath('userData'), "User Data")
        if(!existsSync(this.userData)) mkdirSync(this.userData)

        this.connect('history')
        this.connect('bookmarks')
    }
}