/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { BuildOptions } from "esbuild";
import { ensureDir, statSync, symlink, writeFile } from "fs-extra";
import { basename, resolve } from "path";
import rimraf from "rimraf";
import { bundleAssets } from "./assets";
import { buildChunks } from "./chunks";
import { buildReact } from "./react";
import { buildStimulus } from "./stimulus";
import { checkTypes } from "./type-checking";
import bytes from "./util/bytes";

export const commonConfig: BuildOptions = {
	outdir: resolve(process.cwd(), "dist"),
	bundle: true,
	target: "firefox90",
	sourcemap: "both",
	metafile: true,
	minify: process.env.NODE_ENV == "production",
	logLevel: "warning",
	write: false,
	tsconfig: resolve(process.cwd(), "tsconfig.json"),
};

interface Output {
	path: string;
	contents: string;
	bytes: number;
	ref?: boolean;
	target?: string;
}

async function main() {
	let t = Date.now();

	try {
		rimraf.sync(resolve(process.cwd(), "dist"));

		const targets = [
			await checkTypes(),
			await buildReact(),
			await buildStimulus(),
			await buildChunks(),
			await bundleAssets(),
		];

		await ensureDir(commonConfig.outdir as string);

		let outputs: any[] = [];

		for (const target of targets) {
			for (const file of target.outputFiles) {
				file.path = file.path.replace(
					`${process.cwd()}/`,
					""
				);

				outputs.push(file);
			}
		}

		const longestOutputLength = Math.max(
			0,
			...outputs.map((o) => o.path.length)
		);

		outputs.push({
			path: "dist/jar.mn",
			contents: `browser.jar:\n% content dot %content/dot/ contentaccessible=yes\n${outputs
				.map((o: Output) => {
					const jarFilename = o.path.split(
						`${basename(commonConfig.outdir as string)}/`
					)[1];

					return `\tcontent/dot/${jarFilename} (${jarFilename})`;
				})
				.join("\n")}`,
		});

		outputs.push({
			path: "dist/moz.build",
			contents: `JAR_MANIFESTS += ["jar.mn"]`,
		});

		for await (const output of outputs) {
			const fullPath = resolve(process.cwd(), output.path);

			if (output.ref) await symlink(output.target, fullPath);
			else await writeFile(fullPath, output.contents);

			output.bytes = statSync(fullPath).size;

			console.log(
				`${output.path}${[
					...Array(
						longestOutputLength - output.path.length + 4
					),
				].join(" ")}${bytes(output.bytes)}`
			);
		}

		console.log(`⚡ Done in ${Date.now() - t}ms`);
	} catch (e) {
		console.error(`Failed to compile frontend.`);
		console.error(e);
		process.exit(1);
	}
}

main();
