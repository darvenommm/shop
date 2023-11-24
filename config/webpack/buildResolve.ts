import type { Configuration } from 'webpack';

import type { BuildOptions } from './types/types';

export const buildResolve = ({
  paths,
}: BuildOptions): Configuration['resolve'] => {
  return {
    alias: {
      '@': paths.src,
    },
    extensions: ['.tsx', '.ts', '.js'],
  };
};
