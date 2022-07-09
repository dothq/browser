/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from "@emotion/styled";
import Box from "browser/components/common/box";

const AddressbarBackground = styled(Box)`
	width: 100%;
	height: 100%;

	top: 0;
	left: 0;
	z-index: 0;

	position: absolute;

	background-color: var(--toolbar-field-background-color);

	border-radius: 8px;
`;

export default AddressbarBackground;
