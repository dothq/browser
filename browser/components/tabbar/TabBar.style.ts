/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from "@emotion/styled";
import Box from "../common/box";

export const StyledTabBar = styled(Box)`
	display: flex;
	align-items: center;

	height: 44px;

	-moz-window-dragging: drag;

	@media (-moz-gtk-csd-available) {
		border-top-left-radius: env(-moz-gtk-csd-titlebar-radius);
		border-top-right-radius: env(-moz-gtk-csd-titlebar-radius);
	}
`;

export const TabsContainer = styled(Box)`
	display: flex;
	flex: 1;
	align-items: center;

	padding-top: 6px;
	padding-inline-start: 3rem;

	height: 100%;

	gap: 0.35rem;
`;
