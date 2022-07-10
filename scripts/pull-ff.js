import axios from "axios";
import { execa } from "execa";
import { appendFileSync, existsSync, writeFileSync } from "fs";
import { homedir, platform, tmpdir } from "os";
import { resolve } from "path";
import { exit } from "process";
import which from "which";

const sh = (bin, args, opts) => {
	if (platform() == "win32") {
		args = ["-c", `${[bin, ...args].join(" ")}`];
		bin = resolve("C:", "mozilla-build", "start-shell.bat");

		console.warn(`Running command inside Mozillabuild...`);
	}

	return execa(bin, args, {
		...(opts || {}),
		stdio: "inherit",
		env: {
			...(opts && "env" in opts ? opts.env : {}),
			...process.env,
		},
	});
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

		const where = async (bin) => {
			try {
				return await which(bin);
			} catch (e) {
				return null;
			}
		};

		if (!(await where("git"))) {
			console.error(`Git was not found on this machine!`);
			console.error(`Install it from https://www.git-scm.com/`);
		}

		if (!(await where("hg"))) {
			console.error(`Mercurial was not found on this machine!`);
			console.error(
				`Install it from https://www.mercurial-scm.org/`
			);
		}

		if (!(await where("python3"))) {
			console.error(`Python3 was not found on this machine!`);
			console.error(`Install it from https://www.python.org/`);
		}

		if (!(await where("git-cinnabar"))) {
			if (existsSync(resolve(homedir(), ".git-cinnabar"))) {
				process.env.PATH = `${process.env.PATH}:${resolve(
					homedir(),
					".git-cinnabar"
				)}`;
			} else {
				console.info(`Installing Git Cinnabar...`);

				await sh("git", [
					"clone",
					"https://github.com/glandium/git-cinnabar",
					resolve(homedir(), ".git-cinnabar"),
				]);

				if (platform() == "win32") {
					console.error(
						`Add the following item to your PATH in Windows:`
					);
					console.error(
						resolve(homedir(), ".git-cinnabar")
					);
					exit(1);
				} else {
					if (
						existsSync(
							resolve(homedir(), ".bash_profile")
						)
					) {
						appendFileSync(
							resolve(homedir(), ".bash_profile"),
							`\nexport PATH="$PATH:${resolve(
								homedir(),
								".git-cinnabar"
							)}"`
						);
					} else if (
						existsSync(resolve(homedir(), ".bashrc"))
					) {
						appendFileSync(
							resolve(homedir(), ".bashrc"),
							`\nexport PATH="$PATH:${resolve(
								homedir(),
								".git-cinnabar"
							)}"`
						);
					} else if (
						existsSync(resolve(homedir(), ".zshrc"))
					) {
						appendFileSync(
							resolve(homedir(), ".zshrc"),
							`\nexport PATH="$PATH:${resolve(
								homedir(),
								".git-cinnabar"
							)}"`
						);
					} else {
						console.error(
							`Unable to work out your UNIX shell.`
						);
						console.error(
							`Append export PATH="$PATH:${resolve(
								homedir(),
								".git-cinnabar"
							)}" to your shell configuration file.`
						);

						exit(1);
					}

					process.env.PATH = `${process.env.PATH}:${resolve(
						homedir(),
						".git-cinnabar"
					)}`;

					if (!(await where("git-cinnabar"))) {
						console.error(
							`Failed to install Git Cinnabar.`
						);
						exit(1);
					}
				}
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
