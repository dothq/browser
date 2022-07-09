/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from "@emotion/styled";
import Box from "browser/components/common/box";
import React from "react";
import RenderableWidget from "../customise/widget";

const StyledUnknownWidget = styled(Box)`
	border: 2px dashed red;
	padding: 4px 8px;
	color: red;
`;

interface Props {
	id: string;
	rotation: "horizontal" | "vertical";
}

class UnknownWidget extends RenderableWidget<Props> {
	public render() {
		return (
			<StyledUnknownWidget>
				{this.props.rotation == "horizontal"
					? `unknown widget: ${this.props.id}`
					: ``}
			</StyledUnknownWidget>
		);
	}
}

export default UnknownWidget;
