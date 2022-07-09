/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import createCache from "@emotion/cache";
import { injectGlobal } from "@emotion/css";
import { configure } from "mobx";
import CustomisableUI from "../customise";
import NavBar from "../navbar/NavBar";
import TabBar from "../tabbar/TabBar";
import Tabs from "../tabs/api";
import { GlobalStyle } from "./global.style";

export class Browser {
	public customisable: CustomisableUI = new CustomisableUI();
	public tabs: Tabs = new Tabs();

	public emotionCache = createCache({ key: "browser" });

	public init() {
		// Configure MobX state
		configure({
			enforceActions: "never",
		});

		// Initialise vital services
		this.customisable.init();

		// Inject global styles
		injectGlobal`${GlobalStyle}`;

		// Mount UI components
		TabBar.mount(this.emotionCache);
		NavBar.mount(this.emotionCache);

		console.log("gBrowser: init");
	}
}

// Create a singleton
const instance = new Browser();

window.dot = instance;
window.dot.init();
export default instance;
