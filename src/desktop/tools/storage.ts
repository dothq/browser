import { appWindow } from ".."
import { USER_DATA } from "../../constants/storage";

export const dbImport = async () => {
    const d = await appWindow.storage.db.dump();

    const r = { userData: USER_DATA, items: [] }
    
    for (const collection of d.collections) {
        r.items.push({
            collection: collection.name,
            documents: collection.docs
        })
    }

    return r
}