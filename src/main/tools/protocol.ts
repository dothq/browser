import { session, app } from "electron"
import { EXPO_URL } from "../../renderer/constants/web"
import { parse } from "url"
import { resolve } from "path"

export const startProtocolService = () => {
    const ses = session.fromPartition('persist:view')

    if(process.env.ENV == "development") {
        ses.protocol.registerBufferProtocol('dot', (request, callback) => {
            const parsed = parse(request.url)

            console.log(parsed)

            callback({ mimeType: 'text/html', data: Buffer.from(`<script>document.title = "${parsed.host.substr(0, 1).toUpperCase() + parsed.host.substr(1, parsed.host.length)}"; window.dotURL = JSON.parse(\`${JSON.stringify(parsed)}\`)</script><iframe src="http://localhost:9015/${parsed.path == "/" ? parsed.host + ".html" : parsed.path.split("/")[1] + `?t=${Date.now()}`}" style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;">`) })
        }, (error) => {
          if (error) console.error('Failed to register protocol')
        })
    } else {
        ses.protocol.registerFileProtocol('dot', (request, callback) => {
            const parsed = parse(request.url)
    
            console.log("file", parsed, resolve(__dirname, parsed.path))

            callback({ path: resolve(__dirname, parsed.path == "/" ? parsed.host + ".html" : parsed.path.split("/")[1] + `?t=${Date.now()}`) })
        }, (error) => {
          if (error) console.error('Failed to register protocol')
        })
    }
}