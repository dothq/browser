/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import AppConstants from "./AppConstants";
import BrowserToolboxLauncher from "./BrowserToolboxLauncher";
import Cc from "./Cc";
import ChromeUtils from "./ChromeUtils";
import Ci from "./Ci";
import Cu from "./Cu";
import Services from "./Services";
import XPCOMUtils from "./XPCOMUtils";

export function JSModule(options?: { queryInterface?: string[] }) {
	return function decorate<T extends Function>(target: T) {
		if (!options) return target;

		const { queryInterface } = options;

		if (queryInterface && queryInterface.length) {
			// Use stock ChromeUtils to generate the QI just in case
			target.prototype.QueryInterface =
				window.ChromeUtils.generateQI(queryInterface);
		}

		return target;
	};
}

export {
	ChromeUtils,
	BrowserToolboxLauncher,
	Cc,
	Ci,
	Cu,
	Services,
	XPCOMUtils,
	AppConstants,
};
