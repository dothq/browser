export const path = require('path');
import nodeExternals from 'webpack-node-externals';

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
    externals: [nodeExternals()],
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
      },
      module: {
        rules: [
          { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    }
};