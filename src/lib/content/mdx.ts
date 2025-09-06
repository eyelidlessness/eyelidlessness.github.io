import type { AnyPlugin, PluginsList } from '@mdx-js/mdx';
import mdxjs from '@mdx-js/mdx';
import { mdx as h, MDXProvider } from '@mdx-js/preact';
import remarkSmartypants from '@silvenon/remark-smartypants';
import { transform } from 'buble-jsx-only';
import dedent from 'dedent';
import type { ElementType, FunctionComponent, VNode } from 'preact';
import { Fragment, h as preactH, toChildArray } from 'preact';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import rehypeParse from 'rehype-parse';
import rehypeRemark from 'rehype-remark';
import remark from 'remark';
import remarkAbbr from 'remark-abbr';
import remarkMDX from 'remark-mdx';
import remarkMDXToPlainText from 'remark-mdx-to-plain-text';
import remarkSlug from 'remark-slug';
import remarkStringify from 'remark-stringify';
import { CodeBlock } from '../../components/CodeBlock.js';
import { Emoji, isEmojiProps } from '../../components/Emoji.js';
import { abbreviations } from '../a11y/abbreviations.js';
import { StylesProvider } from '../styles/styles.js';
import { remarkDistinctAbbr } from './abbr.js';
import { syntaxHighlighting } from './syntax.js';

const Div = ({ className, children, ...rest }: JSX.IntrinsicElements['div']) =>
	className === 'language-id'
		? null
		: className === 'code-container'
			? h(Fragment, rest, ...toChildArray(children))
			: preactH(
					'div',
					{
						className,
						...rest,
					},
					...toChildArray(children)
				);

const Span = ({ children, ...props }: JSX.IntrinsicElements['span']) =>
	isEmojiProps(props, children)
		? preactH(Emoji, props, children)
		: preactH('span', props, children);

const defaultProps = {
	components: {
		div: Div,
		pre: CodeBlock,
		span: Span,
	},
	rehypePlugins: [rehypeAccessibleEmojis],
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
	RM extends readonly AnyPlugin[],
> {
	readonly children?: string | VNode;
	readonly components?: Readonly<Record<string, ElementType>>;
	readonly rehypePlugins?: PluginsList<RH>;
	readonly remarkPlugins?: PluginsList<RM>;
}

type MDXComponent = FunctionComponent<
	MDXProps<readonly AnyPlugin[], readonly AnyPlugin[]>
>;

export const MDX: MDXComponent = (props): VNode => {
	const {
		children: baseChildren = h(() => null, {}),
		components: baseComponents = {},
		rehypePlugins: baseRehypePlugins = [],
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

	const children =
		typeof baseChildren === 'string'
			? dedent(baseChildren).trim()
			: baseChildren;

	const rehypePlugins = [...defaultProps.rehypePlugins, ...baseRehypePlugins];

	const remarkPlugins = [...defaultProps.remarkPlugins, ...baseRemarkPlugins];

	const jsx = mdxjs
		.sync(children, {
			rehypePlugins,
			remarkPlugins,
			skipExport: true,
		})
		.trim();

	const { code } = transform(jsx, { objectAssign: 'Object.assign' });

	const keys = Object.keys(scope);
	const values = Object.values(scope);

	const suffix = `return h(
    MDXProvider,
    {components},
    h(MDXContent, props)
  )`;

	type Fn = (...args: unknown[]) => VNode;

	// eslint-disable-next-line @typescript-eslint/no-implied-eval
	const fn = new Function('h', ...keys, `${code}\n\n${suffix}`) as Fn;

	return fn(h, ...values);
};

// prettier-ignore
type CallableTemplateTagParams =
  | Parameters<TemplateTag<unknown>>
  | readonly string[];

const mdxAbbreviations = Object.entries(abbreviations)
	.map(([abbr, expansion]) => `*[${abbr}]: ${expansion}`)
	.join('\n');

const withAbbreviations = (str: string) => [str, mdxAbbreviations].join('\n\n');

interface GetMDXStringOptions {
	readonly includeAbbreviations: boolean;
}

const getMDXString = (
	[first, ...rest]: CallableTemplateTagParams,
	{ includeAbbreviations = true }: GetMDXStringOptions
) => {
	const raw =
		typeof first === 'string'
			? [first, ...rest].join('')
			: String.raw(first, ...rest);

	if (includeAbbreviations) {
		return withAbbreviations(raw);
	}

	return raw;
};

export const mdx = (...args: CallableTemplateTagParams): VNode => {
	const str = getMDXString(args, { includeAbbreviations: true });

	return preactH(StylesProvider, {}, preactH(MDX, {}, str));
};

export const mdxInline = (...args: CallableTemplateTagParams): VNode => {
	const str = getMDXString(args, { includeAbbreviations: true });

	return preactH(
		StylesProvider,
		{},
		preactH(
			MDX,
			{
				components: {
					p: Fragment,
				},
			},
			str
		)
	);
};

export const mdxRaw: TemplateTag<string> = (...args) => {
	const str = getMDXString(args, { includeAbbreviations: false });

	return remark()
		.use(rehypeParse)
		.use(rehypeRemark)
		.use(remarkStringify)
		.use(remarkMDX)
		.use(remarkMDXToPlainText)
		.processSync(str)
		.contents.toString()
		.trim();
};
