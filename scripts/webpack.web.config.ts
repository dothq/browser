import { mode } from "./webpack.config"

const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require("path")

const generateHTML = (entryPoints) => {
  const entries = Object.keys(entryPoints)

  const returnValue = []

  entries.forEach((entry) => {
    returnValue.push(new HtmlWebpackPlugin({  
      title: entry.substr(0, 1).toUpperCase() + entry.substr(1, entry.length),
      inject: true,
      chunks: [entry],
      filename: `${entry}.html`
    }))
  })

  return returnValue;
}

const entry = {
  settings: './src/renderer/expo/settings',
};

module.exports = {
    target: 'web',
    name: 'renderer',
    entry: entry,
    mode: mode,
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, '../build')
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
        }
      ]
    },
    watch: mode == "development",
    devServer: {
      contentBase: path.join(__dirname, 'build'),
      port: 9015,
      hot: false,
      inline: false
    },
    plugins: [
      ...generateHTML(entry)
    ]
};