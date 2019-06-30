import { remote } from "electron";

export const defaultNotifOptions = {
    body: 'Example Notification',
    title: 'Dot Notification Handler',
    time: Date().slice(16,21),
    icon: remote.app.getAppPath() + '/static/icon.png'
};