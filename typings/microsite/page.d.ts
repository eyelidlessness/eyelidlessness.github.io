/**
 * Copypasta from current state of installed `microsite`, with the following
 * modifications:
 *
 * - Imports are revised to match the local copypasta directory structure
 */
declare module 'microsite/page' {
  import { ComponentProps, JSX, ComponentType } from "preact";
  import type { StaticPath, StaticPropsContext } from 'microsite/utils/router';
  import type { createPrefetch } from 'microsite/utils/prefetch';
  declare type RestParam<S extends string> = S extends `...${infer A}` ? A : never;
  declare type StandardParam<S extends string> = S extends `...${infer A}` ? never : S;
  declare type ExtractParams<S extends string> = S extends `[${infer A}]` ? A : never;
  declare type TupleToUnion<T extends any[]> = T[number];
  declare type Split<S extends string> = string extends S ? string[] : S extends '' ? [] : S extends `${infer T}/${infer U}` ? [T, ...Split<U>] : [
      S
  ];
  declare type NormalizePath<S extends string> = S extends `/${infer T}` ? T : S;
  declare type AllPathParams<S extends string, P extends string = ExtractParams<TupleToUnion<Split<NormalizePath<S>>>>> = {
      [param in P]: string | string[];
  };
  declare type RestParams<S extends string, Base extends string = keyof AllPathParams<S>> = {
      [a in RestParam<Base>]: string[];
  };
  declare type StandardParams<S extends string, Base extends string = keyof AllPathParams<S>> = {
      [a in StandardParam<Base>]: string;
  };
  export declare type PathParams<S extends string> = RestParams<S> & StandardParams<S>;
  export interface GetStaticPaths<Path extends string, P extends PathParams<Path>> {
      (ctx: {
          prefetch?: ReturnType<typeof createPrefetch>;
      }): Promise<{
          paths: StaticPath<P>[];
      } | string | null>;
  }
  export interface GetStaticProps<T extends ComponentType<any> | keyof JSX.IntrinsicElements, Path extends string, P extends PathParams<Path>> {
      (ctx: StaticPropsContext<P> & {
          prefetch?: ReturnType<typeof createPrefetch>;
      }): Promise<{
          props: ComponentProps<T>;
      } | string | null>;
  }
  export interface Page<T extends ComponentType<any> | keyof JSX.IntrinsicElements, Path extends string, P extends PathParams<Path>> {
      path?: Path;
      getStaticPaths?: GetStaticPaths<Path, P>;
      getStaticProps?: GetStaticProps<T, Path, P>;
  }
  export declare function definePage<T extends ComponentType<any> | keyof JSX.IntrinsicElements, Path extends string, P extends PathParams<Path>>(Component: T, page?: Page<T, Path, P>): {
      path?: Path;
      getStaticPaths?: GetStaticPaths<Path, P>;
      getStaticProps?: GetStaticProps<T, Path, P>;
      Component: T;
  };
  export {};
}
