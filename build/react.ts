/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { build } from "esbuild";
import { commonConfig } from ".";

export async function buildReact() {
	const result = await build({
		...commonConfig,
		entryPoints: {
			browser: "./components/main/index.ts",
		},
	});

	return result;
}
