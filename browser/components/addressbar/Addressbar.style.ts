/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from "@emotion/styled";
import Box from "../common/box";

export const StyledAddressbar = styled(Box)`
	display: flex;
	align-items: center;

	width: 800px;
	height: 36px;

	position: relative;

	border-radius: 8px;

	padding: 2px;
	gap: 0.2rem;
`;
