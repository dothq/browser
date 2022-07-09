/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import ToolbarButton from "browser/components/common/button/toolbar";
import React from "react";
import RenderableWidget from "../customise/widget";

interface Props {
	label?: boolean;
}

class DownloadsButton extends RenderableWidget<Props> {
	public render() {
		return (
			<ToolbarButton
				icon={"download.svg"}
				text={this.props.label ? "Downloads" : undefined}
			/>
		);
	}
}

export default DownloadsButton;
