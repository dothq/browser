/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Spacer from "browser/components/common/spacer";
import React from "react";
import RenderableWidget from "../widget";

class SpacerWidget extends RenderableWidget<{}> {
	public render() {
		return <Spacer />;
	}
}

export default SpacerWidget;
