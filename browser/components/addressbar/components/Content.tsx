/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Customisable from "browser/components/customise/target";
import React, { PureComponent } from "react";

class AddressbarContent extends PureComponent {
	public render() {
		return <Customisable id={"addressbar"} type={"horizontal"} />;
	}
}

export default AddressbarContent;
