import { ipcMain } from "electron";

import { onViewCreate } from "../events/view";

ipcMain.on('view-create', onViewCreate)