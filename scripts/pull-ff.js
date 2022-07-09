import axios from "axios";
import { execa } from "execa";
import { existsSync, writeFileSync } from "fs";
import { platform, tmpdir } from "os";
import { resolve } from "path";
import { exit } from "process";

const sh = (bin, args, opts) => {
	if (platform() == "win32") {
		args = ["-c", `${[bin, ...args].join(" ")}`];
		bin = resolve("C:", "mozilla-build", "start-shell.bat");

		console.warn(`Running command inside Mozillabuild...`);
	}

	return execa(bin, args, { ...(opts || {}), stdio: "inherit" });
};

const main = async () => {
	if (existsSync(resolve(process.cwd(), "core"))) {
	} else {
		if (platform() == "win32") {
			if (
				!existsSync(
					resolve("C:", "mozilla-build", "start-shell.bat")
				)
			) {
				console.error(`Mozillabuild is not installed!`);
				console.error(``);
				console.error(
					`In order to build on a Windows machine, it is required`
				);
				console.error(
					`that any commands relating to the engine should be executed`
				);
				console.error(
					`within the Mozillabuild shell to reduce incompabilities.`
				);
				console.error(``);
				console.error(
					`Please install it from https://ftp.mozilla.org/pub/mozilla/libraries/win32/MozillaBuildSetup-Latest.exe,`
				);
				console.error(
					`and re-run this command from the Mozillabuild shell at ${resolve(
						"C:",
						"mozilla-build",
						"start-shell.bat"
					)}`
				);

				exit(1);
			}
		}

		console.warn(
			`Since Firefox isn't in the tree yet, we will need to clone it. This may take a few minutes to a few hours.`
		);

		const res = await axios.get(
			"https://hg.mozilla.org/releases/mozilla-release/raw-file/default/python/mozboot/bin/bootstrap.py",
			{
				responseType: "arraybuffer",
			}
		);

		const bootstrapPath = resolve(tmpdir(), "bootstrap.py");
		res.data = res.data.toString();

		if (
			res.data.includes(
				`= input_clone_dest(vcs, no_interactive)`
			)
		) {
			res.data = res.data.replace(
				`= input_clone_dest(vcs, no_interactive)`,
				`= "core"`
			);
		} else {
			console.error(`Failed to apply patch to bootstrap.py!`);
			exit(1);
		}

		writeFileSync(resolve(tmpdir(), "bootstrap.py"), res.data);

		await sh("git", ["config", "fetch.prune", "true"]);
		await sh(
			"python3",
			[bootstrapPath, "--vcs=git", "--no-interactive"],
			{ stdio: "inherit" }
		);
	}
};

main();
