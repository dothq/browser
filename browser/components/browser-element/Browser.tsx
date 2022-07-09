/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React, { PureComponent } from "react";
import { StyledBrowser } from "./Browser.style";

class Browser extends PureComponent {
	public render() {
		return <StyledBrowser id={"browser-panel"} tabIndex={-1} />;
	}
}

export default Browser;
