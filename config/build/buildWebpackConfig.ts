import path from 'path';
import webpack, { node } from 'webpack';
import 'webpack-dev-server';

import { BuildOptions } from '../types/config';

import { buildPlugins } from '../build/buildPlugins';
import { buildLoaders } from '../build/buildLoaders';
import { buildResolves } from '../build/buildResolves';

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[hash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolves(),
  };
}
