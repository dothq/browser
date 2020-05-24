import { session, app } from "electron"
import { parse } from "url"
import { resolve } from "path"

export const startProtocolService = () => {
    const ses = session.fromPartition('persist:view')

    if(process.env.ENV == "development") return;

    ses.protocol.registerFileProtocol('dot', (request, callback) => {
        const parsed = parse(request.url)

        callback({ path: resolve(`${app.getAppPath()}/build/${parsed.hostname}.html`) })
    }, (error) => {
      if (error) console.error('Failed to register protocol')
    })
}