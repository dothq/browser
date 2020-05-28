import { View } from "../view";
import { appWindow } from "..";

export const updateMouseBoundries = (allowed: boolean) => {
    appWindow.overlay.setPointerEvents(allowed)
}