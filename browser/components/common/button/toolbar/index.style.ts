/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from "@emotion/styled";
import { TBDisplayMode } from ".";

export const StyledToolbarButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	appearance: none;
	border: none;
	background-color: transparent;

	-moz-context-properties: fill;
	fill: var(--toolbarbutton-icon-fill); // @todo add themes

	-moz-window-dragging: no-drag;

	transition: 0.2s background-color, 0.2s border;

	&:active:hover {
		transition: 0.05s background-color, 0.05s box-shadow;
	}

	${({
		w,
		h,
		roundness,
		displayMode,
		disabled,
	}: {
		w?: string | number;
		h?: string | number;
		roundness?: number;
		displayMode?: TBDisplayMode;
		disabled?: boolean;
	}) => `
		${
			disabled
				? `
                opacity: 0.3;
            `
				: `
                &:hover {
                    background-color: var(--toolbarbutton-hover-background);
                }

                &:hover:active {
                    background-color: var(--toolbarbutton-active-background);
                }
        `
		}

		${
			displayMode == TBDisplayMode.Icon
				? `
                width: ${
					w
						? typeof w == "string"
							? w
							: `${w}rem`
						: "2.4rem"
				};
                height: ${
					w
						? typeof w == "string"
							? w
							: `${w}rem`
						: "2.4rem"
				};
            `
				: `
                width: ${
					w
						? typeof w == "string"
							? w
							: `${w}rem`
						: "2.4rem"
				};
                height: ${
					h
						? typeof h == "string"
							? h
							: `${h}rem`
						: "2.4rem"
				};
            `
		}

		border-radius: ${roundness || 0.5}rem;

		padding-inline: ${
			displayMode == TBDisplayMode.IconAndText
				? `0.75rem`
				: displayMode == TBDisplayMode.Icon
				? `0`
				: `0.5rem`
		};
	`}
`;
