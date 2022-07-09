/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from "@emotion/styled";
import Box from "../common/box";

export const StyledTab = styled(Box)`
	display: flex;

	width: 250px;
	height: 100%;

	-moz-window-dragging: no-drag;

	border-radius: 6px 6px 0 0;

	&[data-active="true"] {
		background-attachment: scroll, scroll, fixed;
		background-color: transparent;
		background-image: linear-gradient(
				var(--lwt-selected-tab-background-color, transparent),
				var(--lwt-selected-tab-background-color, transparent)
			),
			linear-gradient(
				var(--toolbar-bgcolor),
				var(--toolbar-bgcolor)
			),
			var(--lwt-header-image, none);
		background-position: 0 0, 0 0, right top;
		background-repeat: repeat-x, repeat-x, no-repeat;
		background-size: auto 100%, auto 100%, auto auto;
	}

	&:not([data-active="true"]) {
		&:hover {
			background-color: color-mix(
				in srgb,
				currentColor 11%,
				transparent
			);
		}
	}
`;

export const TabContainer = styled(Box)`
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100%;
	height: 100%;
`;

export const TabContent = styled(Box)`
	display: flex;
	align-items: center;
	flex: 1;

	height: 100%;

	gap: 0.7rem;

	overflow: hidden;
`;
