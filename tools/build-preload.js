if(parseInt(process.versions.node.split(".")[0]) >= 11) {
    console.log("\x1b[41m⚠  Node version 11 or lower is required to run Dot");
    process.kill(process.pid)
}