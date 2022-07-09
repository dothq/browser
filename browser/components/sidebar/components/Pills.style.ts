/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from "@emotion/styled";
import Box from "browser/components/common/box";

export const StyledSidebarPills = styled(Box)`
	display: flex;
	align-items: center;
	flex-direction: column;

	width: 46px;
	min-width: 46px;
	height: 100%;

	gap: 0.35rem;
`;
