/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Tab from "browser/components/tab";
import { makeObservable, observable } from "mobx";
import { TabsTrackerBase } from "./base";

class Tabs extends TabsTrackerBase {
	@observable public visibleTabs: Tab[] = [];

	public onTabOpened(tab: Tab) {
		const nativeTab = tab.linkedTab;

		if (nativeTab.hidden || nativeTab.closing) return;

		this.visibleTabs.push(tab);
	}

	public constructor() {
		super();

		makeObservable(this);

		this.on("tab-opened", this.onTabOpened);
	}
}

export default Tabs;
