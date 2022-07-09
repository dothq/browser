/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { observer } from "mobx-react";
import React, { Component } from "react";
import { StyledTabTitle } from "./Title.style";

interface Props {
	children: string;
}

class TabTitle extends Component<Props> {
	public render() {
		return <StyledTabTitle>{this.props.children}</StyledTabTitle>;
	}
}

export default observer(TabTitle);
