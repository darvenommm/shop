import { join } from 'node:path';

import { buildConfig } from './config/webpack';

import type { Configuration } from 'webpack';

import type { BuildOptions, BuildMode, BuildPaths } from './config/webpack';

interface EnvironmentVariables {
  mode?: BuildMode;
  port?: number;
}

export default (env: EnvironmentVariables): Configuration => {
  env.mode = env.mode ? env.mode : 'development';

  const paths: BuildPaths = {
    entry: join(__dirname, 'src', 'index.tsx'),
    output: join(__dirname, 'build'),
    public: join(__dirname, 'public'),
    src: join(__dirname, 'src'),
  };

  const options: BuildOptions = {
    mode: env.mode,
    isDevelopment: env.mode === 'development',
    isProduction: env.mode === 'production',
    port: env.port ?? 3000,
    paths,
  };

  return buildConfig(options);
};
