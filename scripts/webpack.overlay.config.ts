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
  overlay: './src/renderer/overlay',
};

module.exports = {
    target: 'electron-renderer',
    name: 'overlay',
    entry: entry,
    mode: mode,
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    optimization: {
      usedExports: true,
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
        },
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]',
              esModule: false
            },
          },
        }
      ]
    },
    watch: mode == "development",
    devServer: {
      contentBase: path.join(__dirname, 'build'),
      port: 9020,
      hot: false,
      inline: false
    },
    plugins: [
      ...generateHTML(entry)
    ]
};