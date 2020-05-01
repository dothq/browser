export const path = require('path');

export const mode = process.env.ENV

console.log(mode)

module.exports = {
    target: 'electron-main',
    name: 'main',
    entry: {
        main: './src/main/index.ts',
    },
    mode: mode,
    watch: mode == "development",
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
      },
      module: {
        rules: [
          { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    }
};