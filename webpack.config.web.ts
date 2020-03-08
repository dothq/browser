import path from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import WriteFilePlugin from 'write-file-webpack-plugin';

import { devMode, aliases } from './webpack.config';

import * as Sentry from '@sentry/node';

console.log(path.resolve(__dirname, 'static', 'pages', 'app.html'))

const webConfig = {
    mode: devMode,
    target: 'web',
    entry: {
      newtab: path.resolve(__dirname, 'src', 'renderer', 'views', 'newtab', 'index.tsx'),
      settings: path.resolve(__dirname, 'src', 'renderer', 'views', 'settings', 'index.tsx'),
      error: path.resolve(__dirname, 'src', 'renderer', 'views', 'error', 'index.tsx'),
    },
    plugins: [
      new HtmlWebpackPlugin({  
        template: path.resolve(__dirname, 'static', 'pages', 'app.html'),
        inject: true,
        chunks: ['newtab'],
        filename: `newtab.html`
      }),
      new HtmlWebpackPlugin({  
        template: path.resolve(__dirname, 'static', 'pages', 'app.html'),
        inject: true,
        chunks: ['settings'],
        filename: `settings.html`
      }),
      new HtmlWebpackPlugin({  
        template: path.resolve(__dirname, 'static', 'pages', 'app.html'),
        inject: true,
        chunks: ['error'],
        filename: `error.html`
      }),
      new WriteFilePlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, 'build', 'web'),
        port: 4445,
        disableHostCheck: true,
        hot: false,
        inline: false,
        liveReload: false,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        }
    },
    output: {
        path: path.resolve(__dirname, 'build', 'web'),
        filename: '[name].js',
        publicPath: '',
      },
      node: {
        __dirname: false,
        __filename: false,
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
        alias: aliases,
        modules: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, './'),
        ]
      },
      devtool: 'source-map',
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: 'awesome-typescript-loader',
            options: {
              transpileOnly: true,
              experimentalWatchApi: true,
              useCache: true
            },
          },
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
              loader: 'url-loader',
              options: {
                name: 'fonts/[name].[ext]',
              },
            },
          },
        ],
      },
};

export default webConfig;

Sentry.init({ dsn: 'https://6820d13549a4444991a1c7e9a8047e31@sentry.io/3379175' });