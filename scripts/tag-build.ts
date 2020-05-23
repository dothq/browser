import { writeFileSync, readFileSync } from "fs";
import { resolve } from 'path';

if(process.env.GITHUB_BUILD_NUMBER) {
    const json = readFileSync(resolve(__dirname, "../package.json"))

    const pkg = JSON.parse((json as unknown as string))
    
    const items = [
        pkg.version.split(".")[0], 
        pkg.version.split(".")[1], 
        process.env.GITHUB_BUILD_NUMBER || 0, 
        pkg.version.split(".")[2]
    ]

    pkg.version = items.join(".")
    
    writeFileSync(resolve(__dirname, "../package.json"), JSON.stringify(pkg))
}
