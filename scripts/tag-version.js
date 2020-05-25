const fs = require("fs")
const { resolve } = require("path")

const p = fs.readFileSync(resolve(__dirname, "../package.json"))

const pkg = JSON.parse(p)

const args = process.argv.splice(process.execArgv.length + 2);

let parts = [
    pkg.version.includes("-") ? pkg.version.split("-")[0] : pkg.version.substr(0, 5),
    args.find(arg => arg.includes("tag=")) ? args.find(arg => arg.includes("tag=")).split("tag=")[1].length == 0 ? "" : "-" + args.find(arg => arg.includes("tag=")).split("tag=")[1] : "",
    pkg.version.includes("-") ? "-" + pkg.version.split("-")[1] : pkg.version.substr(5, pkg.version.length)
]

pkg.version = parts.join("");

fs.writeFileSync(resolve(__dirname, "../package.json"), JSON.stringify(pkg))