declare module 'microsite/utils/router' {
  import type { Prefetch } from "microsite/utils/prefetch";
  declare const pathToSegments: (path: string) => {
      text: string;
      isDynamic: boolean;
      isCatchAll: boolean;
  }[];
  export interface Params {
      [param: string]: string | string[];
  }
  export interface RouteInfo {
      segments: ReturnType<typeof pathToSegments>;
      params: Params;
  }
  export declare type StaticPath<P extends Params = Params> = string | {
      params: P;
      meta?: any;
  };
  export interface StaticPropsContext<P extends Params = Params> {
      path: string;
      params: P;
      prefetch?: Prefetch;
  }
  export interface StaticPathsContext {
      prefetch?: Prefetch;
  }
  export declare function getPathFromParams(fileName: string, params: Params): string;
  export declare function generateStaticPropsContext(fileName: string, pathOrParams: string | {
      params: Params;
  }): StaticPropsContext;
  export {};
}
