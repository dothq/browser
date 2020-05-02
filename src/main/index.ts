import { AppWindow } from "./app";
import { app, ipcMain } from "electron";
import { View } from "./view";
import { NAVIGATION_HEIGHT } from "../renderer/app/constants/window";

export let appWindow: AppWindow;

ipcMain.setMaxListeners(0);
app.allowRendererProcessReuse = true;

app.on('ready', () => {
    appWindow = new AppWindow();

    const { view } = new View(3, "data:text;html,Hello%20there!%20Welcome%20to%20the%20first%20release%20of%20the%20Dot%20Browser%20rewrite.%0ANothing%20much%20works%20right%20now%2C%20but%20you%20can%20see%20the%20UI%20on%20your%20screen.%0A%0AMore%20will%20come%20in%20the%20future.")

    appWindow.window.setBrowserView(view)

    const { width, height } = appWindow.window.getBounds()

    view.setBounds({ x: 0, y: NAVIGATION_HEIGHT, width, height: height - NAVIGATION_HEIGHT });
})