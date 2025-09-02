declare module 'microsite/utils/prefetch' {
  import { RequestInfo, RequestInit } from "node-fetch";
  export declare type Prefetch = ReturnType<typeof createPrefetch>;
  export interface CacheEntry {
      data: any;
      meta: {
          prefetch: string | null;
          hash: string | null;
      };
  }
  export declare function getCacheEntry(method: "getStaticPaths" | "getStaticProps", fileName: string): Promise<CacheEntry>;
  export declare function createPrefetch(previousKey: string | null): (info: RequestInfo, init?: RequestInit) => Promise<string | null>;
  export declare const isKeyValid: (previousKey: string | null, key: string | null) => boolean;
}
