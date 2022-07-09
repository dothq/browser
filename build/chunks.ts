/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { build } from "esbuild";
import { commonConfig } from ".";

export async function buildChunks() {
	const result = await build({
		...commonConfig,
		entryPoints: {
			"browser-init": "./components/main/startup.ts",
		},
	});

	return result;
}
