import { execa } from "execa";
import { existsSync, writeFileSync } from "fs";
import { resolve } from "path";
import axios from "axios";
import { tmpdir } from "os";
import { exit } from "process";

const main = async () => {
    if (existsSync(resolve(process.cwd(), "core"))) {

    } else {
        console.warn(`Since Firefox isn't in the tree yet, we will need to clone it. This may take a few minutes to a few hours.`)

        const res = await axios.get(
            "https://hg.mozilla.org/releases/mozilla-release/raw-file/default/python/mozboot/bin/bootstrap.py",
            {
                responseType: "arraybuffer"
            }
        );

        const bootstrapPath = resolve(tmpdir(), "bootstrap.py");
        res.data = res.data.toString();

        if (res.data.includes(`= input_clone_dest(vcs, no_interactive)`)) {
            res.data = res.data.replace(`= input_clone_dest(vcs, no_interactive)`, `= "core"`);
        } else {
            console.error(`Failed to apply patch to bootstrap.py!`);
            exit(1);
        } 

        writeFileSync(resolve(tmpdir(), "bootstrap.py"), res.data);

        await execa("python3", [bootstrapPath, "--vcs=git", "--no-interactive"], { stdio: "inherit" });
    }
}

main();