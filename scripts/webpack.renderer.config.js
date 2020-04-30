const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const mode = process.env.ENV

const generateHTML = (entryPoints) => {
  const entries = Object.keys(entryPoints)

  const returnValue = []

  entries.forEach((entry) => {
    returnValue.push(new HtmlWebpackPlugin({  
      template: path.resolve(__dirname, '../static', 'app.html'),
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
        { test: /\.tsx?$/, loader: "ts-loader" }
      ]
    },
    watch: mode == "development",
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      port: 9010
    },
    plugins: [
      ...generateHTML(entry)
    ]
};