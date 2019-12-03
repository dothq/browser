import path from 'path';
import merge from 'webpack-merge';
import NodeExternals from 'webpack-node-externals';

import TerserPlugin from 'terser-webpack-plugin';

import ExtractCssChunksPlugin from 'extract-css-chunks-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import WriteFilePlugin from 'write-file-webpack-plugin';

import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import NullPlugin from 'webpack-null-plugin';

import { Configuration } from 'webpack';

export const devMode = process.env.NODE_ENV === 'development' ? 'development' : 'production';

process.env.isOpen = "false";

export const baseConfig: Configuration = {
  output: {
    path: path.resolve(__dirname, 'build', 'main'),
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
    alias: {
        '~/renderer': path.resolve(__dirname, 'src', 'renderer'),
        '~/main': path.resolve(__dirname, 'src', 'main'),
        '~/preloads': path.resolve(__dirname, 'src', 'preloads'),
        '~/shared': path.resolve(__dirname, 'src', 'shared'),
        '~/extensions': path.resolve(__dirname, 'src', 'extensions'),
    }
  },
  devtool: 'source-map',
  watchOptions: {
    ignored: [
      path.resolve(__dirname, 'node_modules'),
    ]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
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
  watch: true,
  externals: [NodeExternals()],
  plugins: [
    devMode ? new NullPlugin() : new ForkTsCheckerWebpackPlugin({ tslint: true }),
    new ExtractCssChunksPlugin(),
    new WriteFilePlugin()
  ],
});

const mainDevConfig = merge.smart(mainConfig, developmentConfig);
const mainProdConfig = merge.smart(mainConfig, productionConfig);

const preloadConfig = merge.smart(baseConfig, {
  target: 'electron-renderer',
  entry: {
    'view-preload': './src/preloads/view-preload.ts'
  },
  watch: true,
  plugins: [new WriteFilePlugin()],
});

const preloadDevConfig = merge.smart(preloadConfig, developmentConfig);
const preloadProdConfig = merge.smart(preloadConfig, productionConfig);

export default (devMode
  ? [mainDevConfig, preloadDevConfig]
  : [mainProdConfig, preloadProdConfig]);