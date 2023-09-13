import { RuleSetRule } from 'webpack';

const cssLoader = {
  test: /\.s[ac]ss$/i,
  use: [
    // Creates `style` nodes from JS strings
    'style-loader',
    // Translates CSS into CommonJS
    'css-loader',
    // Compiles Sass to CSS
    'sass-loader',
  ],
};

// Если не используем TypeScript то нужен babel-loader
export function buildLoaders(): RuleSetRule[] {
  const typesriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [typesriptLoader, cssLoader];
}
