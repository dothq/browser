/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React, { PureComponent } from "react";
import Customisable from "../customise/target";
import SidebarPills from "./components/Pills";
import { StyledSidebar } from "./Sidebar.style";

class Sidebar extends PureComponent {
	public render() {
		return (
			<StyledSidebar id={"sidebar"}>
				<SidebarPills>
					<Customisable id={"sidebar"} type={"vertical"} />
				</SidebarPills>
			</StyledSidebar>
		);
	}
}

export default Sidebar;
