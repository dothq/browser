import path from 'path';
import WriteFilePlugin from 'write-file-webpack-plugin';

import HtmlWebpackPlugin from 'html-webpack-plugin';

import { devMode } from './webpack.config';
import webpack from 'webpack';

const webConfig = {
    target: 'web',
    mode: devMode,
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
      new WriteFilePlugin(),
      new webpack.EnvironmentPlugin({
        NODE_ENV: devMode
      })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'build', 'web'),
        port: 4445,
        hot: false,
        inline: false,
        disableHostCheck: true,
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
        alias: {
            '~/renderer': path.resolve(__dirname, 'src', 'renderer'),
            '~/main': path.resolve(__dirname, 'src', 'main'),
            '~/preloads': path.resolve(__dirname, 'src', 'preloads'),
            '~/shared': path.resolve(__dirname, 'src', 'shared'),
            '~/extensions': path.resolve(__dirname, 'src', 'extensions'),
        },
        modules: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, './'),
        ]
      },
      devtool: 'eval',
      watchOptions: {
        ignored: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'src', 'preloads', 'view-preload.ts'),
        ]
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              experimentalWatchApi: true
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