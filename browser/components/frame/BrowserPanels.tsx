/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React, { PureComponent } from "react";
import Browser from "../browser-element/Browser";
import Sidebar from "../sidebar/Sidebar";
import { StyledBrowserPanels } from "./BrowserPanels.style";

class BrowserPanels extends PureComponent {
	public render() {
		return (
			<StyledBrowserPanels id={"panels"}>
				<Sidebar />
				<Browser />
			</StyledBrowserPanels>
		);
	}
}

export default BrowserPanels;
