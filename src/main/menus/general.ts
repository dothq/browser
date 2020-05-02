import { Menu, MenuItem } from "electron";

export const generalMenu = Menu.buildFromTemplate([
    {
        label: "Back",
        accelerator: "Alt+Left"
    },
    {
        label: "Forward",
        accelerator: "Alt+Right"
    },
    {
        label: "Reload",
        accelerator: "CmdOrCtrl+R",
        role: "reload"
    },
    {
        type: "separator"
    },
    {
        label: "Save As",
        accelerator: "CmdOrCtrl+S",
    },
    {
        label: "Print",
        accelerator: "CmdOrCtrl+P"
    },
    {
        label: "Send to device",
        accelerator: "CmdOrCtrl+U"
    },
    {
        type: "separator"
    },
    {
        label: "View Page Source"
    },
    {
        label: "Inspect",
        role: "toggleDevTools"
    },
    {
        type: "separator"
    },
    {
        label: "Zoom In",
        role: "zoomIn",
        visible: false
    },
    {
        label: "Zoom Our",
        role: "zoomOut",
        visible: false
    },
])