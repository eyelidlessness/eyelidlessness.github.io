import type { TwoSlashReturn } from '@typescript/twoslash';
import type { IStyle } from 'fela';
import path from 'node:path';
import { cwd } from 'node:process';
import type { h as PreactH, VNode } from 'preact';
import { renderToString } from 'preact-render-to-string';
import type { IThemedToken } from 'shiki';
import { getHighlighter, loadTheme } from 'shiki';
import type { Lang } from 'shiki-languages';
import { BUNDLED_LANGUAGES } from 'shiki-languages';
import { renderers } from 'shiki-twoslash';
import type { Plugin } from 'unified';
import type { Node } from 'unist';
import visit from 'unist-util-visit';
import type { IRawThemeSetting } from 'vscode-textmate';
import { asserted } from '../assertions.js';
import { css, styled, StylesProvider, theme } from '../styles/index.js';

declare const h: typeof PreactH;

interface RichNode extends Node {
	children: Node[];
	lang: Lang;
	meta?: string[] | null;
	twoslash?: TwoSlashReturn;
	type: string;
	value: string;
}

const themesDir = path.resolve(cwd(), './syntax-themes');

const [darkTheme, lightTheme] = await Promise.all([
	loadTheme(path.resolve(themesDir, './yi-dark.json')),
	loadTheme(path.resolve(themesDir, './yi-light.json')),
]);

const themeStyleMapping = {
	background: 'backgroundColor',
	fontStyle: 'fontStyle',
	foreground: 'color',
} as const;

const fontStyleMapping = {
	bold: {
		fontWeight: 'bold',
	},
	italic: {
		fontStyle: 'italic',
	},
	strikethrough: {
		textDecoration: 'strikethrough',
	},
	underline: {
		textDecoration: 'underline',
	},
} as const;

const getFontStyles = (fontStyle: string) =>
	fontStyle
		.trim()
		.split(/\b\W*\b/)
		.reduce(
			(acc, style) => ({
				...acc,

				...fontStyleMapping[style as keyof typeof fontStyleMapping],
			}),
			{}
		);

const getSettingStyles = (setting: IRawThemeSetting['settings']) =>
	Object.entries(setting).reduce((acc, [key, value]) => {
		const styleKey = (themeStyleMapping as Record<string, unknown>)[key];

		if (value == null || typeof styleKey !== 'string') {
			return acc;
		}

		const styles =
			styleKey === 'fontStyle' ? getFontStyles(value) : { [styleKey]: value };

		return {
			...acc,
			...styles,
		};
	}, {});

const [darkHighlighter, lightHighlighter] = await Promise.all([
	getHighlighter({ theme: darkTheme }),
	getHighlighter({ theme: lightTheme }),
]);

const allLanguages = new Set(BUNDLED_LANGUAGES.map((language) => language.id));

const twoslashLanguages = new Set(['ts', 'tsx', 'typescript']);

const getTokenStyles = (token: IThemedToken): IStyle | null => {
	if (token.explanation == null) {
		return null;
	}

	return token.explanation.reduce(
		(explanationAcc, explanation) => ({
			...explanationAcc,

			...explanation.scopes.reduce(
				(scopesAcc, { themeMatches }) => ({
					...scopesAcc,

					...themeMatches.reduce(
						(themeMatchesAcc, { settings }) => ({
							...themeMatchesAcc,
							...getSettingStyles(settings),
						}),
						scopesAcc
					),
				}),
				explanationAcc
			),
		}),
		{ color: token.color }
	);
};

const renderToken = (
	lightToken: IThemedToken,
	darkToken: IThemedToken,
	props: JSX.IntrinsicElements['span'] = {}
): VNode => {
	const lightStyles = getTokenStyles(lightToken);

	const baseDarkStyles = getTokenStyles(darkToken);
	const darkStyles =
		baseDarkStyles == null
			? null
			: {
					nested: {
						[theme.darkMode]: baseDarkStyles,
					},
				};

	const { content } = lightToken;

	if (lightStyles == null && darkStyles == null) {
		return h('span', props, content);
	}

	const styles = {
		...lightStyles,
		...darkStyles,
	};

	const Component = styled('span', styles);

	return h(Component, props, content);
};

const lastLineTokenClassName = css({
	paddingRight: '1rem',
});

const lastLineProps = {
	className: lastLineTokenClassName,
};

const renderTokens = (
	lightLines: readonly IThemedToken[][],
	darkLines: readonly IThemedToken[][]
) =>
	renderToString(
		h(
			StylesProvider,
			{},
			h(
				'pre',
				{},
				h(
					'code',
					{},
					...lightLines.reduce<Array<VNode | string>>((acc, line, lineIndex) => {
						const tokens = line.map((lightToken, columnIndex) => {
							const darkToken = asserted(darkLines[lineIndex]?.[columnIndex]);
							const props = columnIndex === line.length - 1 ? lastLineProps : {};

							return renderToken(lightToken, darkToken, props);
						});
						const separator = lineIndex === 0 ? '' : '\n';

						return [...acc, separator, ...tokens];
					}, [])
				)
			)
		)
	);

const visitor = (node: RichNode) => {
	const { lang: baseLanguage, value: baseCode, meta } = node;

	// const shouldDisableTwoslash = Boolean(env.TWOSLASH_DISABLE) || true;

	// if (!shouldDisableTwoslash) {
	// 	// runTwoSlashOnNode(settings, node);
	// }

	// Shiki doesn't respect json5 as an input, so switch it
	// to json, which can handle comments in the syntax highlight
	// prettier-ignore
	const language = (baseLanguage as string) === 'json5'
    ? 'json'
    : baseLanguage;

	let value: string;

	const code = baseCode.replace(/^\n+|\n+$/g, '');

	if (!allLanguages.has(language)) {
		value = renderers.plainTextRenderer(code, {});
	} else {
		const lightLines = lightHighlighter.codeToThemedTokens(code, language);
		const darkLines = darkHighlighter.codeToThemedTokens(code, language);

		value = renderTokens(lightLines, darkLines);
	}

	if (twoslashLanguages.has(language) && !meta?.includes('ignore')) {
		// const ext = language === 'tsx'
		//   ? language
		//   : 'ts';
		// const twoslash = twoslasher(code, ext);
	}

	node.children = [];
	node.type = 'html';
	node.value = value;
};

/**
 * Runs twoslash across an AST node, switching out the text content, and lang
 * and adding a `twoslash` property to the node.
 */
// const runTwoSlashOnNode = (settings: ShikiTwoslashSettings, node: RichNode) => {
//   if (node.meta?.includes('twoslash')) {
//     const results = runTwoSlash(node.value, node.lang, settings);

//     node.value    = results.code;
//     node.lang     = results.extension as Lang;
//     node.twoslash = results;
//   }
// };

export const syntaxHighlighting: Plugin = () => {
	const transform = (markdownAST: Node) => {
		visit(markdownAST, 'code', visitor);
	};

	return transform;
};
