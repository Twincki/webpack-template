import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server';

import { BuildOptions } from '../types/config';

import { buildPlugins } from '../build/buildPlugins';
import { buildLoaders } from '../build/buildLoaders';
import { buildResolves } from '../build/buildResolves';

export function buildWebpackConfig(options: BuildOptions) {
  return {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
      filename: '[name].[hash].js',
      path: path.resolve(__dirname, 'build'),
      clean: true,
    },
    plugins: buildPlugins(),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolves(),
  };
}
