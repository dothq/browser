/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from "react";
import RenderableWidget from "../customise/widget";
import { StyledAddressbar } from "./Addressbar.style";
import AddressbarBackground from "./components/Background";

class Addressbar extends RenderableWidget {
	public allowedRotations = ["horizontal"];

	public render() {
		return (
			<StyledAddressbar>
				<AddressbarBackground />
			</StyledAddressbar>
		);
	}
}

export default Addressbar;
