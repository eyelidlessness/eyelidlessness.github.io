import * as mdxjs from '@mdx-js/mdx';
import { MDXProvider } from '@mdx-js/preact';
import { transform } from 'buble-jsx-only';
import dedent from 'dedent';
import type { ElementType, FunctionComponent, VNode } from 'preact';
import { Fragment, h, toChildArray } from 'preact';
import { renderToString } from 'preact-render-to-string';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import rehypeParse from 'rehype-parse';
import rehypeRemark from 'rehype-remark';
import rehypeSlug from 'rehype-slug';
import { remark } from 'remark';
import remarkAbbr from 'remark-abbr';
import remarkMDX from 'remark-mdx';
import remarkMDXToPlainText from 'remark-mdx-to-plain-text';
import remarkSmartypants from 'remark-smartypants';
import remarkStringify from 'remark-stringify';
import type { PluggableList } from 'unified';
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
			: h(
					'div',
					{
						className,
						...rest,
					},
					...toChildArray(children)
				);

const Span = ({ children, ...props }: JSX.IntrinsicElements['span']) =>
	isEmojiProps(props, children)
		? h(Emoji, props, children)
		: h('span', props, children);

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
		rehypeSlug,
		remarkSmartypants,
	],
};

interface MDXProps {
	readonly children?: string | VNode;
	readonly components?: Readonly<Record<string, ElementType>>;
	readonly rehypePlugins?: PluggableList;
	readonly remarkPlugins?: PluggableList;
}

type MDXComponent = FunctionComponent<MDXProps>;

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
			: renderToString(baseChildren);

	const rehypePlugins = [...defaultProps.rehypePlugins, ...baseRehypePlugins];

	const remarkPlugins = [...defaultProps.remarkPlugins, ...baseRemarkPlugins];

	const jsx = mdxjs
		.compileSync(children, {
			rehypePlugins,
			remarkPlugins,
		})
		.value.toString()
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

	return h(StylesProvider, {}, h(MDX, {}, str));
};

export const mdxInline = (...args: CallableTemplateTagParams): VNode => {
	const str = getMDXString(args, { includeAbbreviations: true });

	return h(
		StylesProvider,
		{},
		h(
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
		.value.toString()
		.trim();
};
