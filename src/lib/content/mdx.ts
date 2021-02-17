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
import module                     from 'module';
import {
  ElementType,
  Fragment,
  toChildArray,
  VNode,
} from 'preact';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import remarkMDX                  from 'remark-mdx';
import remarkMDXToPlainText       from 'remark-mdx-to-plain-text';
import remarkSlug                 from 'remark-slug';
import { Plugin }                 from 'unified';
import { CodeBlock }              from '@/components/CodeBlock';
import {
  Emoji,
  isEmojiProps,
} from '@/components/Emoji';
import { abbreviations }          from '@/lib/a11y';
import { StylesProvider }         from '@/lib/styles';
import { remarkDistinctAbbr }     from './abbr';
import { syntaxHighlighting }     from './syntax';

const _require = module.createRequire(import.meta.url);

const remarkParse     = _require('rehype-parse')     as typeof import('rehype-parse');
const rehypeRemark    = _require('rehype-remark')    as typeof import('rehype-remark') & Plugin;
const remark          = _require('remark')           as typeof import('remark');
const remarkAbbr      = _require('remark-abbr')      as typeof import('remark-abbr');
const remarkStringify = _require('remark-stringify') as typeof import('remark-stringify');

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
    remarkAbbr,
    remarkDistinctAbbr,
    remarkSlug,
    remarkSmartypants,
  ],
};

interface MDXProps<
  RH extends readonly AnyPlugin[],
  RM extends readonly AnyPlugin[]
> {
  readonly children?:      string | VNode;
  readonly components?:    Readonly<Record<string, ElementType>>;
  readonly rehypePlugins?: PluginsList<RH>;
  readonly remarkPlugins?: PluginsList<RM>;
}

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

const joinTemplateLiteralStrings = (
  strings:     TemplateStringsArray,
  expressions: readonly any[]
) => {
  const [ first, ...rest ] = strings;

  return expressions.reduce((acc, value, index) => ([
    ...acc,
    value,
    rest[index],
  ]), [ first ]).join('');
};

type TemplateTag<T> = (
  strings:        TemplateStringsArray,
  ...expressions: readonly any[]
) => T;

type CallableTemplateTagParams =
  | Parameters<TemplateTag<any>>
  | [ string ];

const mdxAbbreviations = Object.entries(abbreviations)
  .map(([ abbr, expansion ]) => (
    `*[${abbr}]: ${expansion}`
  ))
  .join('\n');

const getMDXString = (args: CallableTemplateTagParams) => {

  const [ stringOrStrings, ...rest ] = args;

  const baseStr = typeof stringOrStrings === 'string'
    ? stringOrStrings
    : joinTemplateLiteralStrings(stringOrStrings, rest);

  return [
    baseStr,
    mdxAbbreviations,
  ].join('\n\n');
};

export const mdx = (...args: CallableTemplateTagParams): VNode => {
  const str = getMDXString(args);

  return h(StylesProvider, {},
    h(MDX, {}, str)
  );
};

export const mdxInline = (...args: CallableTemplateTagParams): VNode => {
  const str = getMDXString(args);

  return h(StylesProvider, {},
    h(MDX, {
      components: {
        p: Fragment,
      },
    }, str)
  );
};

export const mdxRaw: TemplateTag<string> = (strings, ...expressions) => {
  const str = dedent(joinTemplateLiteralStrings(strings, expressions)).trim();

  return remark()
    .use(remarkParse)
    .use(rehypeRemark)
    .use(remarkStringify)
    .use(remarkMDX)
    .use(remarkMDXToPlainText)
    .processSync(str)
    .contents
    .toString()
    .trim();
};
