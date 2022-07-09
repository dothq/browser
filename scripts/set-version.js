import { execa } from "execa";
import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const main = async () => {
	const newVersion = process.argv[2];

	const packagejson = JSON.parse(
		readFileSync(resolve(process.cwd(), "package.json"), "utf-8")
	);
	packagejson.version = newVersion;
	writeFileSync(
		resolve(process.cwd(), "package.json"),
		JSON.stringify(packagejson, null, 4)
	);

	writeFileSync(
		resolve(process.cwd(), "config", "version.txt"),
		newVersion
	);

	if (!process.argv.includes("--no-commit")) {
		await execa("git", [
			"add",
			resolve(process.cwd(), "package.json"),
			resolve(process.cwd(), "config", "version.txt"),
		]);
		await execa("git", ["commit", "-m", newVersion]);
	}
};

main();
