declare module '@mdx-js/mdx' {
  import { VNode }  from 'preact';
  import { Plugin } from 'unified'

  export type AnyPlugin<S extends any[] = [Settings?], P = Settings> =
    | Plugin<S, P>
    | [ Plugin<S, P>, ...S ];

  export type PluginsList<T extends ReadonlyArray<AnyPlugin>> =
    & T
    & {
      [K in keyof T]:
        T[K] extends AnyPlugin<any, any>
          ? T[K]
        : T[K] extends [ AnyPlugin<infer S, infer P>, ...any[] ]
          ? S extends any[]
            ? T[K] extends [ AnyPlugin<S, P>, ...S ]
              ? T[K]
            : never
          : never
        : never;
    };

  interface MDXOptions<
    RH extends readonly AnyPlugin[],
    RM extends readonly AnyPlugin[]
  > {
    readonly rehypePlugins?: PluginsList<RH>;
    readonly remarkPlugins?: PluginsList<RM>;
    readonly skipExport?:    boolean;
  }

  interface MDX {
    readonly sync: (
      children: string | VNode,
      options:  MDXOptions<any, any>
    ) => string;
  }

  const mdx: MDX;

  export default mdx;
}
