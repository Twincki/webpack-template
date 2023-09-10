import webpack from 'webpack';
import path from 'path';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildPaths } from './config/types/config';

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'public', 'index.html'),
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html'),
};

const config: webpack.Configuration = buildWebpackConfig({
  mode: 'development',
  paths,
});

export default config;
