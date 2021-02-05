import mdxjs, {
  AnyPlugin,
  PluginsList,
} from '@mdx-js/mdx';
import {
  mdx as h,
  MDXProvider,
} from '@mdx-js/preact';
import { transform }          from 'buble-jsx-only';
import dedent                 from 'dedent';
import {
  ElementType,
  Fragment,
  toChildArray,
  VNode,
} from 'preact';
import { CodeBlock }          from '@/components/CodeBlock';
import { syntaxHighlighting } from './syntax';

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

const defaultProps = {
  components:    {
    div: Div,
    pre: CodeBlock,
  },
  rehypePlugins: [],
  remarkPlugins: [
    syntaxHighlighting,
  ],
};

export const MDX = <
  RH extends readonly AnyPlugin[],
  RM extends readonly AnyPlugin[]
>(props: MDXProps<RH, RM>) => {
  const {
    children:      baseChildren      = h(() => null, {}),
    components:    baseComponents    = {},
    rehypePlugins: baseRehypePlugins = [] as any as PluginsList<RH>,
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
