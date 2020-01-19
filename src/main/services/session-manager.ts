import { app } from 'electron';
import { resolve } from 'path';
import { makeId } from '../../shared/utils/string';
import { windowsManager } from '..';

export const startSessionManager = (viewSession: Electron.Session) => {
    viewSession
        .on('will-download', (event, item, webContents) => {
            const fileName = item.getFilename();
            const savePath = resolve(app.getPath('temp'), fileName);
            const id = makeId(32);

            item.setSavePath(savePath);

            windowsManager.window.webContents.send('download-started', {
                fileName,
                receivedBytes: 0,
                totalBytes: item.getTotalBytes(),
                downloadedFrom: item.getURL(),
                savePath,
                id,
            });

            item.on('updated', (event, state) => {
                if (state === 'interrupted') {

                } else if (state === 'progressing') {
                    if (item.isPaused()) {

                    } else {
                        windowsManager.window.webContents.send('download-progress', {
                            id,
                            receivedBytes: item.getReceivedBytes(),
                            downloadedFrom: item.getURL(),
                        });
                    }
                }
            });

            item.once('done', () => {
                windowsManager.window.webContents.send('download-completed', id);
            });
        });

    viewSession.setPermissionRequestHandler(async (webContents, permission, callback, details) => {
        try {
            const parsed = new URL(webContents.getURL());

            if (
                parsed.protocol == 'https:'
            ) {
                const response = await windowsManager.window.permissions.requestPermission(
                    permission,
                    webContents.getURL(),
                    details,
                );

                callback(response);
            } else {    
                if(parsed.protocol != 'dot:') {
                    await windowsManager.window.permissions.requestPermission('http_permission', webContents.getURL(), details);
                } else {
                    callback(true)
                }
            }
        } catch (e) {
            callback(false);
        }
    });
}