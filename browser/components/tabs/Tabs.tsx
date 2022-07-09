/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import BrowserTab from "browser/components/tab/Tab";
import { observer } from "mobx-react";
import React from "react";
import { withWidget } from "../customise/widget";

const TabStrip = observer(() => {
	return (
		<>
			{dot.tabs.visibleTabs.map((tab, key) => (
				<BrowserTab tab={tab} key={key} />
			))}
		</>
	);
});

export default withWidget(TabStrip);
