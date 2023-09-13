import { Configuration } from 'webpack';
import 'webpack-dev-server';

import { BuildOptions } from '../types/config';

import { buildPlugins } from '../build/buildPlugins';
import { buildLoaders } from '../build/buildLoaders';
import { buildResolves } from '../build/buildResolves';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { paths, mode, isDev } = options;

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
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
