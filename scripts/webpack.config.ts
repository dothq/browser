export const path = require('path');

export const mode = process.env.ENV

module.exports = {
    target: 'electron-main',
    name: 'main',
    entry: {
        main: './src/main/index.ts',
        preload: './src/main/preload.ts'
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, '../build')
    },
    mode: mode,
    watch: mode == "development",
    devtool: mode == "development" ? "eval-source-map" : "cheap-source-map",
    optimization: {
      usedExports: true,
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    },
    module: {
      rules: [
        { test: /\.tsx?$/, loader: "ts-loader" }
      ]
    },
    externals: {
      glasstron: "commonjs glasstron"
    }
};
