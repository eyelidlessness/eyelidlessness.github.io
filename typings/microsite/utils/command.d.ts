declare module 'microsite/utils/command' {
  export declare function resolveNormalizedBasePath(args: {
      ['--base-path']?: string;
      [key: string]: any;
  }): any;
  export declare function loadConfiguration(mode: "dev" | "build"): Promise<import("snowpack").SnowpackConfig>;
}
