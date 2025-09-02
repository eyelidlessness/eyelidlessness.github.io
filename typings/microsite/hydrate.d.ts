declare module 'microsite/hydrate' {
  import { FunctionComponent } from "preact";
  export declare const HydrateContext: import("preact").Context<string | false>;
  export interface HydrationProps {
      method?: "idle" | "visible";
  }
  export declare function withHydrate<T extends FunctionComponent<any>>(Component: T, hydrationProps?: HydrationProps): T;
}
