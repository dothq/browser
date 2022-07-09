/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React, { PureComponent } from "react";
import { StyledSidebarPills } from "./Pills.style";

interface Props {
	children: React.ReactChild | React.ReactChild[];
}

class SidebarPills extends PureComponent<Props> {
	public render() {
		return (
			<StyledSidebarPills>
				{this.props.children}
			</StyledSidebarPills>
		);
	}
}

export default SidebarPills;
