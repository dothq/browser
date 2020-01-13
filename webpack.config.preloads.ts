import path from 'path';
import WriteFilePlugin from 'write-file-webpack-plugin';
import { devMode, aliases } from './webpack.config';

const preloadConfig = {
    mode: devMode,
    target: 'electron-renderer',
    entry: {
      'view-preload': './src/preloads/view-preload.ts',
    },
    output: {
        path: path.resolve(__dirname, 'build', 'preloads'),
        filename: '[name].js',
        publicPath: '',
    },
    watch: devMode == 'development' ? false : true,
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