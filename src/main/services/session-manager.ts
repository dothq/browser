import { app } from 'electron';
import { resolve } from 'path';
import { makeId } from '../../shared/utils/string';
import { appWindow } from '..';

export const startSessionManager = (viewSession: Electron.Session) => {
    viewSession
        .on('will-download', (event, item, webContents) => {
            const fileName = item.getFilename();
            const savePath = resolve(app.getPath('temp'), fileName);
            const id = makeId(32);

            item.setSavePath(savePath);

            appWindow.webContents.send('download-started', {
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
                        appWindow.webContents.send('download-progress', {
                            id,
                            receivedBytes: item.getReceivedBytes(),
                            downloadedFrom: item.getURL(),
                        });
                    }
                }
            });

            item.once('done', () => {
                appWindow.webContents.send('download-completed', id);
            });
        });

    viewSession.setPermissionRequestHandler(async (webContents, permission, callback, details) => {
        try {
            const parsed = new URL(webContents.getURL());

            if (
                parsed.protocol == 'https:'
            ) {
                const response = await appWindow.permissionWindow.requestPermission(
                    permission,
                    webContents.getURL(),
                    details,
                );

                callback(response);
            } else {    
                if(parsed.protocol != 'dot:') {
                    await appWindow.permissionWindow.requestPermission('http_permission', webContents.getURL(), details);
                } else {
                    callback(true)
                }
            }
        } catch (e) {
            callback(false);
        }
    });
}