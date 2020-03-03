import path from 'path';
import merge from 'webpack-merge';
import NodeExternals from 'webpack-node-externals';

import TerserPlugin from 'terser-webpack-plugin';

import ExtractCssChunksPlugin from 'extract-css-chunks-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import WriteFilePlugin from 'write-file-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import terser from 'terser';

import * as Sentry from '@sentry/node';

import createStyledComponentsTransformer from 'typescript-plugin-styled-components';

import { Configuration } from 'webpack';

export const devMode = process.env.NODE_ENV === 'dev' ? 'development' : 'production';

process.env.isOpen = "false";

export const scTransformer = createStyledComponentsTransformer({
  minify: true,
  displayName: devMode == 'development',
});

export const aliases = {
  '~/renderer': path.resolve(__dirname, 'src', 'renderer'),
  '~/main': path.resolve(__dirname, 'src', 'main'),
  '~/preloads': path.resolve(__dirname, 'src', 'preloads'),
  '~/shared': path.resolve(__dirname, 'src', 'shared'),
  '~/extensions': path.resolve(__dirname, 'src', 'extensions'),
  '~/interfaces': path.resolve(__dirname, 'src', 'interfaces'),
}

export const baseConfig: Configuration = {
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '',
  },
  mode: devMode,
  node: {
    __dirname: false,
    __filename: false,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    alias: aliases
  },
  devtool: 'source-map',
  watchOptions: {
    ignored: [
      path.resolve(__dirname, 'node_modules'),
    ]
  },
  watch: devMode == 'development' ? true : false,
  plugins: [
    new CopyPlugin(
      [
        {
          from:
            'node_modules/@cliqz/adblocker-electron-preload/dist/preload.cjs.js',
          to: 'preload.js',
          transform: (fileContent, path) => {
            return terser.minify(fileContent.toString()).code.toString();
          },
        },
      ],
      { copyUnmodified: true },
    ),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          experimentalWatchApi: true,
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [ExtractCssChunksPlugin.loader, 'css-loader', 'sass-loader'],
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

const developmentConfig: Configuration = {
  watch: true,
  optimization: {
    splitChunks: false,
    removeEmptyChunks: false,
  },
};

const productionConfig: Configuration = {
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
};

const mainConfig = merge.smart(baseConfig, {
  target: 'electron-main',
  name: 'main',
  entry: {
    main: './src/main/index.ts',
  },
  externals: [NodeExternals()],
  plugins: [
    new ExtractCssChunksPlugin(),
    new WriteFilePlugin()
  ],
});

const mainDevConfig = merge.smart(mainConfig, developmentConfig);
const mainProdConfig = merge.smart(mainConfig, productionConfig);

export default (devMode == 'development'
  ? [mainDevConfig]
  : [mainProdConfig]);

Sentry.init({ dsn: 'https://6820d13549a4444991a1c7e9a8047e31@sentry.io/3379175' });