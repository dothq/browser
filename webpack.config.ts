import path from 'path';
import merge from 'webpack-merge';
import NodeExternals from 'webpack-node-externals';

import TerserPlugin from 'terser-webpack-plugin';

import ExtractCssChunksPlugin from 'extract-css-chunks-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import WriteFilePlugin from 'write-file-webpack-plugin';

import createStyledComponentsTransformer from 'typescript-plugin-styled-components';

import { Configuration } from 'webpack';
import { spawn } from 'child_process';

export const devMode = process.env.NODE_ENV === 'development' ? 'development' : 'production';

process.env.isOpen = "false";

let electronProcess;

export const scTransformer = createStyledComponentsTransformer({
  minify: true,
  displayName: devMode == 'development',
});

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
  watch: devMode == 'development' ? false : true,
  plugins: [],
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

mainDevConfig.plugins.push({
  apply: (compiler: any) => {
    compiler.hooks.afterEmit.tap('AfterEmitPlugin', () => {
      if (electronProcess) {
        electronProcess.kill();
      }

      electronProcess = spawn('npm', ['start'], {
        shell: true,
        env: process.env,
        stdio: 'inherit',
      })
        .on('close', code => process.exit(code))
        .on('error', spawnError => console.error(spawnError));
    });
  },
});

export default (devMode == 'development'
  ? [mainDevConfig]
  : [mainProdConfig]);