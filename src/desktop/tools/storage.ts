import { appWindow } from ".."

export const dbImport = async () => {
    const d = await appWindow.storage.db.dump();

    const r = []
    
    for (const collection of d.collections) {
        r.push({
            collection: collection.name,
            documents: collection.docs
        })
    }

    return r
}