import { AppWindow } from '~/main/app-window'

export const zoom = (zoomDirection, window: AppWindow) => {
    const findClosestValue = (arr: Array<number>, value: number) => {
        return arr.reduce((previous, current) => {
          return Math.abs(current - value) < Math.abs(previous - value)
            ? current
            : previous
        })
      }

      const ZoomInFactors = [0.5, 0.67, 0.75, 0.8, 0.9, 1, 1.1, 1.25, 1.5, 1.75, 2]
      const ZoomOutFactors = ZoomInFactors.slice().reverse()

      const rawZoom = window.viewManager.selected.webContents.zoomFactor

      const zoomFactors =
        zoomDirection === "in" ? ZoomInFactors : ZoomOutFactors

      const currentZoom = findClosestValue(zoomFactors, rawZoom)

      const nextZoomLevel = zoomFactors.find(f =>
        zoomDirection === "in" ? f > currentZoom : f < currentZoom
      )

      const newZoom = nextZoomLevel === undefined ? currentZoom : nextZoomLevel

      window.viewManager.selected.webContents.zoomFactor = newZoom

      window.webContents.send('zoom-level-changed', newZoom);
}