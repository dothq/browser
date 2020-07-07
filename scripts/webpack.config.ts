import webpack from "webpack";

export const path = require('path');

export const mode = process.env.ENV

module.exports = {
    target: 'electron-main',
    name: 'main',
    entry: {
        main: './src/desktop/index.ts',
        preload: './src/desktop/preload.ts'
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
    externals: {
      sqlite3: 'commonjs sqlite3'
    },
    node: {
      __dirname: false,
      __filename: false
    },
    resolve: {
      modules: ['node_modules'],
      extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
    },
    module: {
      rules: [
        { test: /\.tsx?$/, loader: "ts-loader" },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      ]
    }
};
