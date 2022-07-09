/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { observer } from "mobx-react";
import React, { PureComponent } from "react";
import { StyledTabClose } from "./Close.style";

class TabClose extends PureComponent {
	public render() {
		return (
			<StyledTabClose
				w={"1.5rem"}
				icon={"close.svg"}
				iconSize={10}
				roundness={4}
			/>
		);
	}
}

export default observer(TabClose);
