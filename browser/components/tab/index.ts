/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { computed, makeObservable, observable } from "mobx";
import TabEventsManager from "./events";

class Tab {
	@observable
	public id: number;

	@observable
	public title: string = "New Tab";

	@observable
	public faviconUrl: string = "";

	@computed
	public get active() {
		return this.linkedTab.getAttribute("selected") == "true";
	}

	@observable
	public linkedBrowser: HTMLBrowserElement;

	@observable
	public linkedTab: HTMLTabElement;

	public eventsManager: TabEventsManager;

	public onAttributeModified(id: string) {
		switch (id) {
			case "image":
				this.faviconUrl = this.linkedBrowser.mIconURL;
				break;
			case "label":
				this.title = this.linkedBrowser.contentTitle;
				break;
		}
	}

	public async close() {
		return true;
	}

	public constructor(browser: HTMLBrowserElement) {
		makeObservable(this);

		this.linkedBrowser = browser;
		this.linkedTab = gBrowser.getTabForBrowser(browser);
		this.id = browser.browserId;

		this.eventsManager = new TabEventsManager(this);
	}
}

export default Tab;
