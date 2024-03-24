import type webpack from 'webpack';

import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildPlugins } from './buildPlugins';
import { type BuildOptions } from './types/config';
import { buildDevServer } from './buildDevServer';

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const {
    mode,
    paths,
    isDev
  } = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: 'bundle.js',
      path: paths.build,
      clean: true,
      publicPath: '/'
    },
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options),
    plugins: buildPlugins(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  };
};
