import mdxjs, {
  AnyPlugin,
  PluginsList,
} from '@mdx-js/mdx';
import {
  mdx as h,
  MDXProvider,
} from '@mdx-js/preact';
import remarkSmartypants          from '@silvenon/remark-smartypants'
import { transform }              from 'buble-jsx-only';
import dedent                     from 'dedent';
import {
  ElementType,
  Fragment,
  toChildArray,
  VNode,
} from 'preact';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import remarkSlug                 from 'remark-slug';
import { CodeBlock }              from '@/components/CodeBlock';
import {
  Emoji,
  isEmojiProps,
} from '@/components/Emoji';
import { syntaxHighlighting }     from './syntax';

interface MDXProps<
  RH extends readonly AnyPlugin[],
  RM extends readonly AnyPlugin[]
> {
  readonly children?:      VNode;
  readonly components?:    Readonly<Record<string, ElementType>>;
  readonly rehypePlugins?: PluginsList<RH>;
  readonly remarkPlugins?: PluginsList<RM>;
}

const Div = ({ className, children, ...rest }: JSX.IntrinsicElements['div']) => (
  className === 'language-id'
    ? null
  : className === 'code-container'
    ? h(Fragment, rest, ...toChildArray(children))
  : h<any>('div' as any, {
      className,
      ...rest,
    }, ...toChildArray(children))
);

const Span = ({ children, ...props }: JSX.IntrinsicElements['span']) => (
  isEmojiProps(props, children)
    ? h(Emoji, props, children)
    : h('span' as any, props, children)
);

const defaultProps = {
  components:    {
    div:  Div,
    pre:  CodeBlock,
    span: Span,
  },
  rehypePlugins: [
    rehypeAccessibleEmojis,
  ],
  remarkPlugins: [
    syntaxHighlighting,
    remarkSlug,
    remarkSmartypants,
  ],
};

export const MDX = <
  RH extends readonly AnyPlugin[],
  RM extends readonly AnyPlugin[]
>(props: MDXProps<RH, RM>) => {
  const {
    children:      baseChildren      = h(() => null, {}),
    components:    baseComponents    = {},
    rehypePlugins: baseRehypePlugins = [] ,
    remarkPlugins: baseRemarkPlugins = [],
  } = props;

  const components = {
    ...defaultProps.components,
    ...baseComponents,
  };

  const scope = {
    mdx: h,
    MDXProvider,
    components,
    props: {},
  };

  const children = typeof baseChildren === 'string'
    ? dedent(baseChildren).trim()
    : baseChildren;

  const rehypePlugins = [
    ...defaultProps.rehypePlugins,
    ...baseRehypePlugins,
  ];

  const remarkPlugins = [
    ...defaultProps.remarkPlugins,
    ...baseRemarkPlugins,
  ];

  const jsx = mdxjs.sync(children, {
    rehypePlugins,
    remarkPlugins,
    skipExport: true,
  }).trim();

  const { code } = transform(jsx, { objectAssign: 'Object.assign' });

  const keys = Object.keys(scope);
  const values = Object.values(scope);

  const suffix = `return h(
    MDXProvider,
    {components},
    h(MDXContent, props)
  )`;

  // eslint-disable-next-line no-new-func
  const fn = new Function('h', ...keys, `${code}\n\n${suffix}`);

  return fn(h, ...values);
};

export const mdx = (
  strings:   TemplateStringsArray,
  ...exprs: Array<any>
) => {
  const [ first, ...rest ] = strings;

  const str = exprs.reduce((acc, value, index) => ([
    ...acc,
    value,
    rest[index],
  ]), [ first ]).join('');

  return h(MDX, {}, str);
};
