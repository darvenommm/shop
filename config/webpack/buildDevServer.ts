import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import type { BuildOptions } from './types/types';

export const buildDevServer = ({
  paths,
  port,
}: BuildOptions): DevServerConfiguration => {
  return {
    static: {
      directory: paths.public,
    },
    historyApiFallback: true,
    hot: true,
    open: true,
    port,
  };
};
