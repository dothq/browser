/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Browser } from "browser/components/main";
import RC from "browser/components/remote-control";
import * as Moz from "mozilla";

declare global {
	// Browser utilities
	const dot: Browser;
	const Services: typeof Moz.Services;
	const AppConstants: typeof Moz.AppConstants;

	// FF utilities
	const gBrowser: any;
	const BrowserFullScreen: () => any;
	const BrowserTryToCloseWindow: (e: any) => void;
	const isInitialPage: (url: string) => boolean;

	// Logging utilities
	const dump: (data: any) => void;
	const dumpn: (data: any) => void;

	const gRemoteControl: typeof RC;

	const Marionette: any;
	const RemoteAgent: any;
	const DevToolsSocketStatus: any;

	interface Document {
		hasValidTransientUserGestureActivation: boolean;

		createXULElement: (element: string) => HTMLElement;
	}

	interface Window {
		docShell: any;
		XULBrowserWindow: any;
		windowReady: boolean;
		windowState: number;
		STATE_MAXIMIZED: number;
		STATE_MINIMIZED: number;
		STATE_NORMAL: number;
		STATE_FULLSCREEN: number;
		content: any;
		openDialog: any;
		PathUtils: any;
		ChromeUtils: typeof Moz.ChromeUtils;
		IOUtils: {
			copy: (...args: any) => any;
			exists: (...args: any) => any;
			getChildren: (...args: any) => any;
			makeDirectory: (...args: any) => any;
			move: (...args: any) => any;
			read: (...args: any) => any;
			readJSON: (...args: any) => any;
			readUTF8: (...args: any) => any;
			remove: (...args: any) => any;
			setPermissions: (...args: any) => any;
			stat: (...args: any) => any;
			touch: (...args: any) => any;
			write: (...args: any) => any;
			writeJSON: (...args: any) => any;
			writeUTF8: (...args: any) => any;
		};
		dump: (...args: any) => any;
		windowRoot: {
			ownerGlobal: Window;
		};
		windowUtils: any;
		isChromeWindow: boolean;
		skipNextCanClose: boolean;
		Components: any;
		BROWSER_NEW_TAB_URL: string;
		arguments: any;
		isBlankPageURL: any;
		browserDOMWindow: any;
		gFissionBrowser: boolean;
		RTL_UI: boolean;
		isFullyOccluded: boolean;
		Cr: any;
		Cc: any;
		Ci: any;
		Cu: any;
		Services: typeof Moz.Services;
		gBrowser: any;
		gSocket: WebSocket;
		[key: string]: any;
	}

	interface HTMLElement {
		hidePopup: any;
		ownerGlobal: any;
	}

	interface HTMLBrowserElement extends HTMLElement {
		browserId: number;
		linkedTab: HTMLTabElement;
		[key: string]: any;
	}

	interface HTMLTabElement extends HTMLElement {
		linkedBrowser: HTMLBrowserElement;
		closing: boolean;
		[key: string]: any;
	}
}
