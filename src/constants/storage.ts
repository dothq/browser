import { app } from "electron";
import { resolve } from 'path';

export const USER_DATA = resolve(app.getPath('userData'), 'User Data')