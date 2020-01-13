import path from 'path';
import WriteFilePlugin from 'write-file-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import NodeExternals from 'webpack-node-externals';

import { devMode, scTransformer, aliases } from './webpack.config';

const rendererConfig = {
    mode: devMode,
    target: 'electron-renderer',
    entry: {
      app: path.resolve(__dirname, 'src', 'renderer', 'views', 'app', 'index.tsx'),
      menu: path.resolve(__dirname, 'src', 'renderer', 'views', 'menu', 'index.tsx'),
      search: path.resolve(__dirname, 'src', 'renderer', 'views', 'search', 'index.tsx'),
      location: path.resolve(__dirname, 'src', 'renderer', 'views', 'location', 'index.tsx'),
      print: path.resolve(__dirname, 'src', 'renderer', 'views', 'print', 'index.tsx'),
      alert: path.resolve(__dirname, 'src', 'renderer', 'views', 'alert', 'index.tsx'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'build', 'renderer'),
        port: 4444,
        inline: false,
        disableHostCheck: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        }
    },
    output: {
        path: path.resolve(__dirname, 'build', 'renderer'),
        filename: '[name].js',
        publicPath: '',
    },
    node: {
        __dirname: false,
        __filename: false,
    },
    devtool: 'source-map',
    watchOptions: {
      ignored: [
        path.resolve(__dirname, 'node_modules'),
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
      alias: aliases,
      modules: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, './'),
      ]
    },
    externals: [NodeExternals()],
    plugins: [
      new HtmlWebpackPlugin({  
        template: path.resolve(__dirname, 'static', 'pages', 'app.html'),
        inject: true,
        chunks: ['app'],
        filename: `app.html`
      }),
      new HtmlWebpackPlugin({  
        template: path.resolve(__dirname, 'static', 'pages', 'app.html'),
        inject: true,
        chunks: ['menu'],
        filename: `menu.html`
      }),
      new HtmlWebpackPlugin({  
        template: path.resolve(__dirname, 'static', 'pages', 'app.html'),
        inject: true,
        chunks: ['search'],
        filename: `search.html`
      }),
      new HtmlWebpackPlugin({  
        template: path.resolve(__dirname, 'static', 'pages', 'app.html'),
        inject: true,
        chunks: ['location'],
        filename: `location.html`
      }),
      new HtmlWebpackPlugin({  
        template: path.resolve(__dirname, 'static', 'pages', 'app.html'),
        inject: true,
        chunks: ['print'],
        filename: `print.html`
      }),
      new HtmlWebpackPlugin({  
        template: path.resolve(__dirname, 'static', 'pages', 'app.html'),
        inject: true,
        chunks: ['alert'],
        filename: `alert.html`
      }),
      new WriteFilePlugin()
    ],
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: 'awesome-typescript-loader',
            options: {
              transpileOnly: true,
              experimentalWatchApi: true,
              useCache: true,
              getCustomTransformers: () => ({
                before: [scTransformer],
              }),
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
  
export default rendererConfig;