import { join } from 'node:path';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { ProgressPlugin, DefinePlugin } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin';

import type { Configuration } from 'webpack';

import type { IBuildOptions } from './types/types';

export const buildPlugins = ({
  paths,
  isDevelopment,
  isProduction,
}: IBuildOptions): Configuration['plugins'] => {
  const htmlPlugin = new HtmlWebpackPlugin({
    filename: 'index.html',
    favicon: join(paths.public, 'favicon.ico'),
    template: join(
      paths.public,
      isDevelopment ? 'development-index.html' : 'production-index.html',
    ),
  });

  const copyPlugin = new CopyPlugin({
    patterns: [
      {
        from: join(paths.public, 'favicons', 'favicon-16x16.png'),
        to: join(paths.output, 'favicons'),
      },
      {
        from: join(paths.public, 'favicons', 'favicon-32x32.png'),
        to: join(paths.output, 'favicons'),
      },
      {
        from: join(paths.public, 'favicons', 'apple-touch-icon.png'),
        to: join(paths.output, 'favicons'),
      },
      {
        from: join(paths.public, 'favicons', 'android-chrome-192x192.png'),
        to: join(paths.output, 'favicons'),
      },
      {
        from: join(paths.public, 'favicons', 'android-chrome-512x512.png'),
        to: join(paths.output, 'favicons'),
      },
      {
        from: join(paths.public, 'favicons', 'site.webmanifest'),
        to: join(paths.output, 'favicons'),
      },
    ],
  });

  const hotModulePlugin = new ReactRefreshWebpackPlugin();
  const progressPlugin = new ProgressPlugin();
  const stylePlugin = new MiniCssExtractPlugin();
  const definePlugin = new DefinePlugin({
    __IS_PROD__: JSON.stringify(isProduction),
    __IS_DEV__: JSON.stringify(isProduction),
  });

  const commonPlugins = [htmlPlugin, definePlugin];

  if (isDevelopment) {
    return [...commonPlugins, hotModulePlugin, progressPlugin];
  }

  if (isProduction) {
    return [...commonPlugins, stylePlugin, copyPlugin];
  }
};
