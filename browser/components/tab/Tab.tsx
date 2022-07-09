/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { observer } from "mobx-react";
import React, { Component } from "react";
import Tab from ".";
import TabClose from "./components/Close";
import TabFavicon from "./components/Favicon";
import TabTitle from "./components/Title";
import { StyledTab, TabContainer, TabContent } from "./Tab.style";

interface Props {
	tab: Tab;
}

class BrowserTab extends Component<Props> {
	public render() {
		return (
			<StyledTab data-active={this.props.tab.active}>
				<TabContainer>
					<TabContent>
						<TabFavicon
							icon={this.props.tab.faviconUrl}
						/>
						<TabTitle>
							{this.props.tab.title || "New Tab"}
						</TabTitle>
					</TabContent>

					<TabClose />
				</TabContainer>
			</StyledTab>
		);
	}
}

export default observer(BrowserTab);
