import { webContents } from "electron";

export const sendLogEvent = (message: any) => {

	message = message + '\n\nFor more information on this warning,\nopen an issue here https://github.com/dot-browser/desktop.'

	webContents.getAllWebContents().forEach(i => {
		i.send('log-message', message)
	})

};
