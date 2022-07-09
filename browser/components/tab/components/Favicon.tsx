/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Icon from "browser/components/common/icon";
import { observer } from "mobx-react";
import React, { Component } from "react";
import { StyledFavicon } from "./Favicon.style";

interface Props {
	icon?: string;
}

class TabFavicon extends Component<Props> {
	public render() {
		return (
			<StyledFavicon>
				<Icon
					size={16}
					icon={
						this.props.icon ||
						"chrome://branding/content/icon64.png"
					}
				/>
			</StyledFavicon>
		);
	}
}

export default observer(TabFavicon);
