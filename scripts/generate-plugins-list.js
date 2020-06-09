const fs = require("fs")
const { resolve } = require("path")

const p = fs.readFileSync(resolve(__dirname, "../package.json"))

const pkg = JSON.parse(p)

const plugins = []

Object.entries(pkg.dependencies).forEach(([key, val]) => {
    if(key.startsWith("@dothq/")) {
        plugins.push({
            packageName: key,
            version: val.replace(/^/g, "")
        })
    }
})

console.log(plugins)
fs.writeFileSync(resolve(__dirname, "../", "build", "plugins.json"), JSON.stringify(plugins))