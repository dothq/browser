import path from 'path';
import merge from 'webpack-merge';
import NodeExternals from 'webpack-node-externals';

import TerserPlugin from 'terser-webpack-plugin';

import ExtractCssChunksPlugin from 'extract-css-chunks-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import WriteFilePlugin from 'write-file-webpack-plugin';

import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import NullPlugin from 'webpack-null-plugin';

import HtmlWebpackPlugin from 'html-webpack-plugin';

import { Configuration } from 'webpack';
import { readdirSync } from 'fs';
import { exec } from 'child_process';

const devMode = process.env.NODE_ENV === 'development';

class rendererPlugins {
    constructor() {
        var externalPlugins = [
            new HtmlWebpackPlugin({  
                template: path.resolve(__dirname, 'static', 'pages', 'app.html'),
                inject: true,
                chunks: ['app'],
                filename: `app.html`
            }),
            {
              apply: (compiler: any) => {
                compiler.hooks.afterEmit.tap('AfterEmitPlugin', (_compilation) => {
                  exec('npm start', (_err, stdout, stderr) => {
                    if (stdout) process.stdout.write(stdout);
                    if (stderr) process.stderr.write(stderr);
                  });
                });
              }
            },
            new WriteFilePlugin()
        ];

        const externals = readdirSync(path.resolve(__dirname, 'src', 'renderer', 'externals'))
        externals.forEach((external: any) => {
            externalPlugins.push(
                new HtmlWebpackPlugin({  
                    template: path.resolve(__dirname, 'static', 'pages', 'app.html'),
                    inject: true,
                    chunks: [`${external}`],
                    filename: `${external}.html`
                })
            );
        });
    
        return externalPlugins;
    }
}

class rendererEntryPoints {
    constructor() {
        var entryPoints = {
            app: path.resolve(__dirname, 'src', 'renderer', 'app', 'index.tsx')
        };

        const externals = readdirSync(path.resolve(__dirname, 'src', 'renderer', 'externals'))
        externals.forEach((external: any) => {
            entryPoints[external] = path.resolve(__dirname, 'src', 'renderer', 'externals', external, 'index.tsx')
        });

        return entryPoints;
    }
}

const baseConfig: Configuration = {
  output: {
    path: path.resolve(__dirname, 'build'),
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
    }
  },
  devtool: 'source-map',
  watchOptions: {
    ignored: /node_modules/,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
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
  externals: [NodeExternals()],
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
  plugins: [
    devMode ? new NullPlugin() : new ForkTsCheckerWebpackPlugin({ tslint: true }),
    new ExtractCssChunksPlugin(),
    new WriteFilePlugin()
  ],
});

const mainDevConfig = merge.smart(mainConfig, developmentConfig);
const mainProdConfig = merge.smart(mainConfig, productionConfig);

const rendererConfig = merge.smart(baseConfig, {
  target: 'electron-renderer',
  entry: new rendererEntryPoints(),
  plugins: new rendererPlugins(),
  devServer: {
    port: 4444,
    inline: true,
    contentBase: './build',
    writeToDisk: true
  }
});

const rendererDevConfig = merge.smart(rendererConfig, developmentConfig);
const rendererProdConfig = merge.smart(rendererConfig, productionConfig);

export default (devMode
  ? [mainDevConfig, rendererDevConfig]
  : [mainProdConfig, rendererProdConfig]);