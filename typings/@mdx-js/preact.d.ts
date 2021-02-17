declare module '@mdx-js/preact' {
  import {
    h,
    ComponentType,
  } from 'preact';

  export const mdx: typeof h;

  interface MDXProviderProps {
    readonly components?: Record<string, ElementType>;
  }

  export const MDXProvider: ComponentType<MDXProviderProps>;
}
