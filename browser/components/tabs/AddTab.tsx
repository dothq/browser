/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from "@emotion/styled";
import React from "react";
import ToolbarButton from "../common/button/toolbar";
import RenderableWidget from "../customise/widget";

const StyledAddTab = styled(ToolbarButton)`
	margin-inline-start: 0.12rem;
`;

interface Props {
	label?: boolean;
}

class AddTab extends RenderableWidget<Props> {
	public render() {
		return <StyledAddTab icon={"add.svg"} />;
	}
}

export default AddTab;
