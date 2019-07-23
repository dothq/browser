import { app, protocol } from 'electron';
import { readFile } from 'fs';
import { join, resolve, normalize } from 'path';
import { parse } from 'url';
import { extensions } from './extensions';
import { sendLogEvent } from './services/debug-log'
import console = require('console');

const applets = ['newtab'];

export const registerProtocols = () => {

  /*
    These methods are now deprecated.
  */

  // protocol.registerStandardSchemes(['dot', 'extension', 'theme']);

  // protocol.registerFileProtocol('dot')
  // protocol.registerSchemesAsPrivileged([
  //   {
  //     scheme: 'dot',
  //     privileges: { bypassCSP: true, secure: true },
  //   },
  //   {
  //     scheme: 'extension',
  //     privileges: { bypassCSP: true, secure: true },
  //   },
  // ]);

  (app as any).on('session-created', (sess: Electron.session) => {
    sess.protocol.registerBufferProtocol(
      'dot-extension',
      (request, callback) => {
        const parsed = parse(decodeURIComponent(request.url));

        if (!parsed.hostname || !parsed.pathname) {
          return callback();
        }

        const extension = extensions[parsed.hostname];

        if (!extension) {
          return callback();
        }

        const { backgroundPage, path } = extension;

        if (
          backgroundPage &&
          parsed.pathname === `/${backgroundPage.fileName}`
        ) {
          return callback({
            mimeType: 'text/html',
            data: backgroundPage.html,
          });
        }

        readFile(join(path, parsed.pathname), (err, content) => {
          if (err) {
            return (callback as any)(-6); // FILE_NOT_FOUND
          }
          return callback(content);
        });

        return null;
      },
      error => {
        if (error) {
          console.error(`Failed to register extension protocol: ${error}`);
        }
      },
    );

    /*
      Dot Protocol is for JUST recieving html files.
    */

    sess.protocol.registerFileProtocol('dot', (request, callback: any) => {
      const url = new URL(request.url)
      sendLogEvent('Dot Protocol is working.')

      var filetype = 'html';
      if(url.hostname.split('.')[1]) {
        filetype = url.hostname.split('.')[1].split(".")[0];
        url.hostname = url.hostname.split(".")[0];
      }

      callback({ path: normalize(`${app.getAppPath()}/static/pages/${url.hostname}.${filetype}`) })
    }, (error) => {
      if (error) sendLogEvent('Failed to register the Dot protocol.')
    })

    /*
      Theme Protocol for getting static assets, such as logos, html files etc.
    */

    sess.protocol.registerFileProtocol('theme', (request, callback: any) => {
      const url = new URL(request.url)
      sendLogEvent('Theme Protocol is working.')

      var path = url.href.split("theme://")[1];
      sendLogEvent(normalize(`${app.getAppPath()}/static/${path}`))

      callback({ path: normalize(`${app.getAppPath()}/static/${path}`) })
    }, (error) => {
      if (error) sendLogEvent('Failed to register the Theme protocol.')
    })

    // sess.protocol.registerFileProtocol(
    //   'dot',
    //   (request, callback: any) => {
    //     const parsed = parse(request.url);

    //     if (applets.indexOf(parsed.hostname) !== -1) {
    //       if (parsed.path === '/') {
    //         return callback({
    //           path: join(app.getAppPath(), 'static/pages', 'about.html'),
    //         });
    //       }

    //       return callback({
    //         path: resolve(app.getAppPath(), 'build', parsed.path),
    //       });
    //     }

    //     if (parsed.path === '/') {
    //       return callback({
    //         path: join(
    //           app.getAppPath(),
    //           'static/pages',
    //           `${parsed.hostname}.html`,
    //         ),
    //       });
    //     }

    //     return callback({
    //       path: join(app.getAppPath(), 'static/pages', parsed.path),
    //     });
    //   },
    //   error => {
    //     if (error) console.error('Failed to register protocol');
    //   },
    // );

    // sess.protocol.registerFileProtocol(
    //   'theme',
    //   (request, callback: any) => {
    //     const parsed = parse(request.url);

    //     if (applets.indexOf(parsed.hostname) !== -1) {
    //       if (parsed.path === '/') {
    //         return callback({
    //           path: join(app.getAppPath(), 'static/pages', 'about.html'),
    //         });
    //       }

    //       return callback({
    //         path: join(app.getAppPath(), 'build', parsed.path),
    //       });
    //     }

    //     if (parsed.path === '/') {
    //       console.log('file:///' + encodeURIComponent(app.getAppPath()).replace(/%5C/g, "\\").replace(/%3A/g, ":") + '\\static\\app-icons\\' + parsed.hostname)
    //       return callback({
    //         path: 'file:///' + encodeURIComponent(app.getAppPath()).replace(/%5C/g, "\\").replace(/%3A/g, ":") + '\\static\\app-icons\\' + parsed.hostname
    //       });
    //     }

    //     return callback({
    //       path: 'file:///' + join(encodeURIComponent(app.getAppPath()).replace(/%5C/g, "\\").replace(/%3A/g, ":"), 'static/app-icons', parsed.path),
    //     });
    //   },
    //   error => {
    //     if (error) console.error('Failed to register protocol');
    //   },
    // );    
  });
};
