import { join } from 'node:path';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { ProgressPlugin } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import type { Configuration } from 'webpack';

import type { BuildOptions } from './types/types';

export const buildPlugins = ({
  paths,
  isDevelopment,
  isProduction,
}: BuildOptions): Configuration['plugins'] => {
  const htmlPlugin = new HtmlWebpackPlugin({
    template: join(paths.public, 'index.html'),
    favicon: join(paths.public, 'favicon.ico'),
  });

  const hotModulePlugin = new ReactRefreshWebpackPlugin();
  const progressPlugin = new ProgressPlugin();
  const stylePlugin = new MiniCssExtractPlugin();

  const commonPlugins = [htmlPlugin];

  if (isDevelopment) {
    return [...commonPlugins, hotModulePlugin, progressPlugin];
  }

  if (isProduction) {
    return [...commonPlugins, stylePlugin];
  }
};
