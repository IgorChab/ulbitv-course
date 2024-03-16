import webpack, { type RuleSetRule } from 'webpack';

import path from 'path';

import { type BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
  const srcPath: BuildPaths['src'] = path.resolve(__dirname, '..', '..', 'src');

  config.resolve?.modules?.push(srcPath);
  config.module?.rules?.push(buildCssLoader(true));

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  config.module.rules = config.module?.rules?.map((rule: RuleSetRule) => {
    const ruleRegex = rule.test as RegExp;

    if (ruleRegex?.test('.svg')) {
      return { ...rule, exclude: /\.svg$/ };
    }

    return rule;
  });

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack']
  });

  config?.plugins?.push(
    new webpack.DefinePlugin({
      __IS_DEV__: true,
      __PROJECT__: JSON.stringify('storybook')
    })
  );
  return config;
};
