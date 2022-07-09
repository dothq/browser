/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { TypedEventEmitter } from "browser/components/events";
import Tab from "browser/components/tab";
import { makeObservable, observable } from "mobx";

interface MozTabEvent extends Event {
	target: HTMLTabElement;
	originalTarget: any;
	detail?: any;
}

export class TabsTrackerBase extends TypedEventEmitter<
	["tab-opened", "tab-closed", "tab-selected"]
> {
	@observable public list = new Map<number, Tab>();

	public handleEvent(event: MozTabEvent) {
		const { linkedBrowser } = event.target;

		console.log(
			`${event.type}: id=${linkedBrowser.browserId} url=${linkedBrowser.currentURI.spec}`
		);

		switch (event.type) {
			case "TabOpen":
				const tab = new Tab(linkedBrowser);
				this.list.set(linkedBrowser.browserId, tab);

				this.emit("tab-opened", tab);
				break;
			case "TabSelect":
			case "TabClose":
				if (this.list.has(linkedBrowser.browserId)) {
					const tab = this.list.get(
						linkedBrowser.browserId
					);

					this.emit(
						event.type == "TabSelect"
							? "tab-selected"
							: "tab-closed",
						tab
					);
				}

				break;
		}
	}

	public constructor() {
		super();

		makeObservable(this);

		window.addEventListener("DOMContentLoaded", () => {
			window.gBrowser.tabContainer.addEventListener(
				"TabOpen",
				this
			);

			window.gBrowser.tabContainer.addEventListener(
				"TabClose",
				this
			);
		});
	}
}
