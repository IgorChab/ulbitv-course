import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import Dotenv from 'dotenv-webpack';

import { type BuildOptions } from './types/config';

export const buildPlugins = ({
  paths,
  isDev,
  mode
}: BuildOptions): webpack.WebpackPluginInstance[] => {
  const plugins = [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: isDev,
      __PROJECT__: JSON.stringify('frontend')
    }),
    new Dotenv({
      path: `./.env.${mode}`
    })
  ];

  if (isDev) {
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new ReactRefreshWebpackPlugin()
    );
  }

  return plugins;
};
