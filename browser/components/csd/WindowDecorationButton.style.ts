/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from "@emotion/styled";
import Box from "../common/box";

export const CSDButton = styled(Box)`
	position: relative;

	${({ variant }: { variant: string }) => `
        grid-area: ${variant == "restore" ? "maximize" : variant};

		& > i {
            @media not (-moz-gtk-csd-${variant}-button) {
                display: none;
            }
    
            -moz-default-appearance: -moz-window-button-${variant};
            -moz-box-ordinal-group: env(
                -moz-gtk-csd-${variant}-button-position
            );
        }
	`};
`;

export const CSDButtonIcon = styled.i`
	appearance: auto;
	-moz-box-align: center;
	-moz-box-pack: center;
	display: -moz-box;
	-moz-window-dragging: no-drag;
`;
