/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React, { PureComponent } from "react";
import NavBar from "../navbar/NavBar";
import { StyledBrowserFrame } from "./BrowserFrame.style";
import BrowserPanels from "./BrowserPanels";

class BrowserFrame extends PureComponent {
	public render() {
		return (
			<StyledBrowserFrame id={"frame"}>
				<NavBar />
				<BrowserPanels />
			</StyledBrowserFrame>
		);
	}
}

export default BrowserFrame;
