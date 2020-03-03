import { protocol } from 'electron';
import { join } from 'path';
import { parse } from 'url';

protocol.registerSchemesAsPrivileged([
  {
    scheme: 'dot',
    privileges: {
      bypassCSP: true,
      secure: true,
      standard: true,
      supportFetchAPI: true,
      allowServiceWorkers: true,
      corsEnabled: true,
    },
  },
]);

export const registerProtocol = (session: Electron.Session) => {
  if(process.env.ENV === "dev") {
    session.protocol.registerHttpProtocol(
      'dot', (request, callback) => {
        const parsed = parse(request.url);

        const baseUrl = 'http://localhost:4445/';

        if (parsed.path === '/') {
          return callback({ url: `${baseUrl}${parsed.hostname}.html` })
        }

        callback({ url: `${baseUrl}${parsed.path}` })
      }
    );
  } else {
    session.protocol.registerFileProtocol(
      'dot', (request, callback) => {
        const parsed = parse(request.url);
  
        if (parsed.path === '/') {
          return callback({ path: join(__dirname, 'web', `${parsed.hostname}.html`) })
        }
  
        callback({ path: join(__dirname, 'web', parsed.path) })
      })
  }
};