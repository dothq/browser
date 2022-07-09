/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { spawn } from "child_process";
import { resolve } from "path";

export async function checkTypes() {
	console.log("🏷️  Running type checks...");

	await new Promise((res) => {
		const proc = spawn(
			resolve(process.cwd(), "node_modules", ".bin", "tsc"),
			["--noEmit"],
			{
				stdio: "inherit",
			}
		);

		proc.on("exit", (code) => {
			if (code !== 0) {
				console.error("❗ Type checking failed!");
				process.exit(code as any);
			}

			res(true);
		});
	});

	console.log("✅ No problems detected.");

	return {
		outputFiles: [],
	};
}
