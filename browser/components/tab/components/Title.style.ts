/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from "@emotion/styled";
import { Base } from "browser/components/common/typography/base";

export const StyledTabTitle = styled(Base)`
	width: 100%;

	display: flex;

	white-space: nowrap;
	overflow: hidden;

	-webkit-mask-image: -webkit-linear-gradient(
		180deg,
		transparent 0,
		#fff 16px
	);
	-webkit-mask-position: top right;
`;
