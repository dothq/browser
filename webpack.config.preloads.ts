import path from 'path';
import WriteFilePlugin from 'write-file-webpack-plugin';
import { devMode, aliases } from './webpack.config';

import * as Sentry from '@sentry/node';

const preloadConfig = {
    mode: devMode,
    target: 'electron-renderer',
    entry: {
      'view-preload': './src/preloads/view-preload.ts',
      'dialog-preload': './src/preloads/dialog-preload.ts'
    },
    output: {
        path: path.resolve(__dirname, 'build', 'preloads'),
        filename: '[name].js',
        publicPath: '',
    },
    watch: devMode == 'development' ? true : false,
    plugins: [new WriteFilePlugin()],
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
          }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
        alias: aliases,
        modules: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, './'),
        ]
    },
}

export default preloadConfig;

Sentry.init({ dsn: 'https://6820d13549a4444991a1c7e9a8047e31@sentry.io/3379175' });