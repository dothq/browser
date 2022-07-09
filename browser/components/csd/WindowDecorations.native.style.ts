/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from "@emotion/styled";
import Box from "browser/components/common/box";

export const StyledCSD = styled(Box)`
	-moz-default-appearance: -moz-window-button-box;
	appearance: auto;

	@media (-moz-gtk-csd-available) {
		margin-inline: 5px;
		gap: 0.5rem;
	}

	@media not (-moz-gtk-csd-available) {
		display: none;
	}

	${({ side }: { side: string }) => `
		flex-direction: ${side == "left" ? `row-reverse` : `row`};

		@media (-moz-gtk-csd-reversed-placement) {
			display: ${side == "left" ? "grid" : "none"};
			grid-template-areas: 'close minimize maximize';
		}

		@media (-moz-gtk-csd-reversed-placement: 0) {
			display: ${side == "right" ? "grid" : "none"};
			grid-template-areas: 'minimize maximize close';
		}
	`};
`;
