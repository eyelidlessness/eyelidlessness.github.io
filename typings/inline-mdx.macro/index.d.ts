declare module 'inline-mdx.macro' {
  import { VNode } from 'preact';

  type Inline = (
    strings:   TemplateStringsArray,
    ...exprs: Array<any>
  ) => VNode;

  export const inline: Inline;
}
