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
  session.protocol.registerFileProtocol(
    'dot',
    (request, callback: any) => {
      const parsed = parse(request.url);

      console.log(parsed)
      console.log(join(__dirname, 'web', parsed.path))

      if (parsed.path === '/') {
        return callback({
          path: join(__dirname, 'web', `${parsed.hostname}.html`),
        });
      }

      callback({ path: join(__dirname, 'web', parsed.path) });
    },
    error => {
      if (error) console.error(error);
    },
  );
};