import * as mdxjs from '@mdx-js/mdx';
import remarkAbbr from '@richardtowers/remark-abbr';
import dedent from 'dedent';
import type {
	ComponentChildren,
	ComponentType,
	ElementType,
	FunctionComponent,
	VNode,
} from 'preact';
import { Fragment, h, toChildArray } from 'preact';
import { renderToString } from 'preact-render-to-string';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import rehypeParse from 'rehype-parse';
import rehypeRaw from 'rehype-raw';
import rehypeRemark from 'rehype-remark';
import rehypeSlug from 'rehype-slug';
import { remark } from 'remark';
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

type AnyComponent = ComponentType | keyof JSX.IntrinsicElements;

type MDXComponentMapping = Readonly<Record<string, AnyComponent>>;

interface DefaultProps {
	readonly components: MDXComponentMapping;
	readonly rehypePlugins: PluggableList;
	readonly remarkPlugins: PluggableList;
}

const defaultProps: DefaultProps = {
	components: {
		div: Div,
		pre: CodeBlock,
		span: Span,
	},
	rehypePlugins: [
		rehypeAccessibleEmojis,
		[rehypeRaw, { passThrough: mdxjs.nodeTypes }],
	],
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

	const rehypePlugins = [...defaultProps.rehypePlugins, ...baseRehypePlugins];
	const remarkPlugins = [...defaultProps.remarkPlugins, ...baseRemarkPlugins];

	const source =
		typeof baseChildren === 'string'
			? dedent(baseChildren).trim()
			: renderToString(baseChildren);

	const functionBody = mdxjs.compileSync(source, {
		rehypePlugins,
		remarkPlugins,
		outputFormat: 'function-body',
		remarkRehypeOptions: {
			handlers: {
				abbrDefinition: () => undefined,
			},
		},
	});

	interface WrappedFnOptions {
		readonly Fragment: typeof Fragment;
		readonly jsx: typeof h;
		readonly jsxs: typeof h;
	}

	interface MDXContentComponentProps {
		readonly components?: MDXComponentMapping;
		readonly children?: ComponentChildren;
	}

	type MDXContentComponent = (props: MDXContentComponentProps) => VNode;

	interface WrappedFnReturn {
		readonly default: MDXContentComponent;
	}

	type WrappedFn = (
		options: WrappedFnOptions,
		...rest: unknown[]
	) => WrappedFnReturn;

	// eslint-disable-next-line @typescript-eslint/no-implied-eval
	const wrappedFn = new Function(
		'options',
		functionBody.value.toString()
	) as WrappedFn;

	return wrappedFn({
		Fragment,
		jsx: h,
		jsxs: h,
	}).default({ components });
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
	{ includeAbbreviations }: GetMDXStringOptions
) => {
	const raw =
		typeof first === 'string'
			? [first, ...rest].join('')
			: String.raw({ raw: first }, ...rest);

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
