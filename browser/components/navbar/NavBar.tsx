/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { EmotionCache } from "@emotion/cache";
import { injectGlobal } from "@emotion/css";
import { render } from "browser/utils/render";
import React, { PureComponent } from "react";
import Customisable from "../customise/target";
import { StyledNavBar } from "./NavBar.style";

class NavBar extends PureComponent {
	static mount(cache: EmotionCache) {
		injectGlobal`
			#navbar-container {
				background-color: var(--toolbar-bgcolor);
				background-image: var(--toolbar-bgimage);
				color: var(--toolbar-color);
				appearance: none;
				border-style: none;
			}
		`;

		render(this, {
			mountId: "#navbar-container",
			parentId: "#navigator-toolbox",
			insertBeforeId: "#PersonalToolbar",
			cache,
		});
	}

	public render() {
		return (
			<StyledNavBar id={"navbar"}>
				<Customisable id={"navbar"} type={"horizontal"} />
			</StyledNavBar>
		);
	}
}

export default NavBar;
