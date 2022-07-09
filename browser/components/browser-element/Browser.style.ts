/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from "@emotion/styled";
import Box from "../common/box";

export const StyledBrowser = styled(Box)`
	width: 100%;
	height: 100%;

	border-top-left-radius: 6px;
	border-left: 1px solid #0000001a; // @todo add themes
	border-top: 1px solid #0000001a;

	background-color: -moz-default-background-color;
`;
