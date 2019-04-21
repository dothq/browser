import * as React from 'react';
import store from '../../store';
import console = require('console');

export const toggleDotButton = () => {
    if(store.options.dotLauncherEnabled == true) {
        store.options.dotLauncherEnabled = false
        console.info(`[SettingsStore] Set dotLauncherEnabled to ${store.options.dotLauncherEnabled}`)
    }
    else {
        store.options.dotLauncherEnabled = true
        console.info(`[SettingsStore] Set dotLauncherEnabled to ${store.options.dotLauncherEnabled}`)
    }
}