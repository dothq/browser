import { session, app } from "electron"
import { EXPO_PREFIX } from "../../renderer/constants/web"
import { parse } from "url"
import { resolve } from "path"

export const startProtocolService = () => {
    const ses = session.fromPartition('persist:view')

    if(process.env.ENV !== "development") {
        ses.protocol.registerFileProtocol('dot', (request, callback) => {
            const parsed = parse(request.url)

            callback({ path: resolve(app.getAppPath(), parsed.path == "/" ? parsed.host + ".html" : parsed.path.split("/")[1] + `?t=${Date.now()}`) })
        }, (error) => {
          if (error) console.error('Failed to register protocol')
        })
    }
}