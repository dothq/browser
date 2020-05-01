import { mode } from "./webpack.config"

const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require("path")

const generateHTML = (entryPoints) => {
  const entries = Object.keys(entryPoints)

  const returnValue = []

  entries.forEach((entry) => {
    returnValue.push(new HtmlWebpackPlugin({  
      title: `Dot Browser`,
      inject: true,
      chunks: [entry],
      filename: `${entry}.html`
    }))
  })

  return returnValue;
}

const entry = {
  app: './src/renderer/app',
};

module.exports = {
    target: 'electron-renderer',
    name: 'renderer',
    entry: entry,
    mode: mode,
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
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
      contentBase: path.join(__dirname, 'dist'),
      port: 9010,
      hot: false,
      inline: false
    },
    plugins: [
      ...generateHTML(entry)
    ]
};