

const cp = require("child_process")

const d = new Date()

const args = process.argv.splice(process.execArgv.length + 2);

const days = args.find(arg => arg.includes("days=")) ? args.find(arg => arg.includes("days=")).split("days=")[1].length == 0 ? 0 : args.find(arg => arg.includes("days=")).split("days=")[1] : 0

cp.exec(`git checkout \`git rev-list -1 --before="${d.getDay()-days}/${d.getMonth()}/${d.getFullYear()}" master\``)
console.log(`Went back in to time to ${d.getDay()-days}/${d.getMonth()}/${d.getFullYear()}`)