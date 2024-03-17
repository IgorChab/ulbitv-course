import type webpack from 'webpack';

import { type BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options;

  const babelLoader = buildBabelLoader(options);

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  };

  const cssLoaders = buildCssLoader(isDev);

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  };

  return [
    babelLoader,
    tsLoader,
    cssLoaders,
    svgLoader,
    fileLoader
  ];
};
