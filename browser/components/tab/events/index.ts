/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Tab from "..";

class TabEventsManager {
	public tab: Tab;
	public browser: HTMLBrowserElement;

	public handleEvent(event: Event) {
		switch (event.type) {
			case "pagetitlechanged": {
				console.log(
					`Tab title changed id=${this.browser.browserId}`
				);

				this.tab.title = this.browser.contentTitle;

				break;
			}
			case "PasswordManager:onFormSubmit": {
				console.log(
					`Tab form submitted id=${this.browser.browserId}`
				);

				break;
			}
		}
	}

	public constructor(tab: Tab) {
		this.tab = tab;
		this.browser = tab.linkedBrowser;
	}
}

export default TabEventsManager;
