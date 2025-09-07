declare module 'microsite/utils/build' {
  export declare const CACHE_DIR = ".microsite/cache";
  export declare const STAGING_DIR = ".microsite/staging";
  export declare const SSR_DIR = ".microsite/ssr";
  export declare const OUT_DIR_NO_BASE = "./dist";
  export declare let OUT_DIR: string;
  export declare const setBasePath: (p: string) => string;
  export interface ManifestEntry {
      name: string;
      hydrateStyleBindings: string[] | null;
      hydrateBindings: Record<string, string[]> | null;
  }
  export interface RouteDataEntry {
      name: string;
      route: string;
      props: Record<string, object>;
  }
  export declare const getFileNameFromPath: (path: string) => string;
  export declare const proxyImportTransformer: {
      filter: (source: string) => boolean;
      transform: (source: string) => string;
  };
  export declare const preactImportTransformer: {
      filter: (source: string) => boolean;
      transform: (source: string) => string;
  };
  export declare const preactToCDN: (code: string) => string;
  export declare const withHydrateTransformer: {
      filter: (source: string) => boolean;
      transform: (source: string) => string;
  };
  /**
   * For the final browser code, we need to strip out withHydrate
   * by replacing it with an identity function which can be
   * completely stripped by a minifier
   */
  export declare const stripWithHydrate: (source: string) => string;
  export declare const hashContentSync: (content: string, len?: number) => string;
  export declare const emitFile: (filename: string, content: string | Uint8Array) => Promise<void>;
  export declare const emitFinalAsset: (filename: string, content: string | Uint8Array) => Promise<void>;
  export declare const copyAssetToFinal: (path: string, transform?: (source: string) => Promise<string>) => Promise<void>;
  export declare const renderPage: (data: RouteDataEntry | null, manifest: ManifestEntry, { basePath, debug, hasGlobalScript }?: {
      basePath?: string;
      debug?: boolean;
      hasGlobalScript?: boolean;
  }) => Promise<{
      name: string;
      contents: string;
  }>;
  export declare const importDataMethods: (path: string) => Promise<DataHandlers>;
  interface DataHandlers {
      getStaticPaths?: (ctx?: any) => any;
      getStaticProps?: (ctx?: any) => any;
  }
  export declare function applyDataMethods(fileName: string, handlers: DataHandlers): Promise<RouteDataEntry[]>;
  export {};
}
