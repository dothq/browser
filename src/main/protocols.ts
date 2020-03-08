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
      corsEnabled: false,
    },
  },
]);

export const registerProtocol = (session: Electron.Session) => {
  if (process.env.NODE_ENV !== 'development') {
    session.protocol.registerFileProtocol(
      'dot',
      (request, callback: any) => {
        const parsed = parse(request.url);

        if (parsed.path === '/') {
          return callback({
            path: join(__dirname, "web", `${parsed.hostname}.html`),
          });
        }

        callback({ path: join(__dirname, parsed.path) });
      },
      error => {
        if (error) console.error(error);
      },
    );
  }
};