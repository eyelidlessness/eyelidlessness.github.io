declare module 'microsite/utils/hydration' {
  import type { ManifestEntry } from "microsite/utils/build";
  export declare function generateHydrateScript(hydrateBindings: ManifestEntry["hydrateBindings"], opts?: {
      basePath?: string;
  }): string;
}
