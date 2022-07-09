/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { readFileSync } from "fs-extra";
import { resolve } from "path";

export async function bundleAssets() {
	let assets = {
		"browser.html": resolve(
			process.cwd(),
			"static",
			"browser.template.html"
		),
	};

	const outputFiles: any = [];

	for (const [key, value] of Object.entries(assets)) {
		const contents = readFileSync(value, "utf-8");

		outputFiles.push({
			path: `dist/${key}`,
			target: value,
			contents,
		});
	}

	return {
		outputFiles,
	};
}
