import fetch from 'node-fetch';

import { windowsManager } from '..';
import { ElectronBlocker, Request } from '@cliqz/adblocker-electron';
import { resolve } from 'path';
import { existsSync, writeFileSync, readFileSync } from 'fs';

export let engine: ElectronBlocker;

const loadFilters = async () => {
    const path = resolve(__dirname, '../', 'filters/default.dat');
  
    const downloadFilters = async () => {
      engine = await ElectronBlocker.fromPrebuiltAdsAndTracking(fetch);
  
      try {
        await writeFileSync(path, engine.serialize());
      } catch (err) {
        if (err) return console.error(err);
      }
    };
  
    if (existsSync(path)) {
      try {
        const buffer = readFileSync(resolve(path));
  
        try {
          engine = ElectronBlocker.deserialize(buffer);
        } catch (e) {
          return downloadFilters();
        }
      } catch (err) {
        return console.error(err);
      }
    } else {
      return downloadFilters();
    }
};

export const runAdblockService = (ses: Electron.Session) => {
  const emitBlockedEvent = (request: Request) => {
    const { tabId } = windowsManager.window.viewManager.selected;

    windowsManager.window.webContents.send(`blocked-ad-${tabId}`);
  };

  loadFilters().then(() => {
    engine.enableBlockingInSession(ses);

    engine.on('request-blocked', emitBlockedEvent);
    engine.on('request-redirected', emitBlockedEvent);
  });
};

export const stopAdblockService = (ses: any) => {
  if (!ses.webRequest.listeners) return;
  try {
    if (engine) {
      engine.disableBlockingInSession(ses);
    }
  } catch (e) {
    if (ses.id1) {
      ses.webRequest.removeListener('onBeforeRequest', ses.id1.id);
      delete ses.id1;
    }

    if (ses.id2) {
      ses.webRequest.removeListener('onHeadersReceived', ses.id2.id);
      delete ses.id2;
    }
  }
};
