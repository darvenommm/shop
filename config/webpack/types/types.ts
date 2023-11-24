export type BuildMode = 'development' | 'production';

export interface BuildPaths {
  entry: string;
  output: string;
  public: string;
  src: string;
}

export interface BuildOptions {
  mode: BuildMode;
  isDevelopment: boolean;
  isProduction: boolean;
  port: number;
  paths: BuildPaths;
}
