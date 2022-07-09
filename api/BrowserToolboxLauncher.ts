/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

interface ModuleInstance {}

interface ModuleStatic {
	new (): ModuleInstance;
	init: () => ModuleInstance;
}

const { BrowserToolboxLauncher } =
	window.ChromeUtils.import<ModuleStatic>(
		"resource://devtools/client/framework/browser-toolbox/Launcher.jsm"
	);

export default BrowserToolboxLauncher;
