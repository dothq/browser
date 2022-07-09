/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from "@emotion/styled";

const Icon = styled.i`
	display: flex;

	${({
		size,
		icon,
		iconSize,
		roundness,
	}: {
		size?: number | string;
		icon: any;
		iconSize?: number | string;
		roundness?: number;
	}) => `
		width: ${typeof size == "number" ? `${size}px` : size};
		width: ${typeof size == "number" ? `${size}px` : size};
		min-width: ${typeof size == "number" ? `${size}px` : size};
		min-height: ${typeof size == "number" ? `${size}px` : size};
		max-width: ${typeof size == "number" ? `${size}px` : size};
		max-height: ${typeof size == "number" ? `${size}px` : size};

		border-radius: ${roundness}px;

		background-image: url(${
			icon.includes(":")
				? icon
				: `chrome://dot/skin/icons/${icon}`
		});
		background-size: ${
			iconSize
				? typeof iconSize == "number"
					? `${iconSize}px`
					: iconSize
				: typeof size == "number"
				? `${size}px`
				: size
		};
		background-repeat: no-repeat;
	`}
`;

export default Icon;
