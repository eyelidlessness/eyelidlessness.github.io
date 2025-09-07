import type NodePath from 'node:path';
import type { SnowpackUserConfig } from 'snowpack';
import type * as Constants from '../common/constants.ts';

const { PREFIXED_NODE_BUILTIN_MODULES } =
	require('../common/constants.ts') as typeof Constants;
const path = require('node:path') as typeof NodePath;
const cwd = process.cwd();

const markdownRelated = [
	'@mdx-js/mdx',
	'@mdx-js/preact',
	'@richardtowers/remark-abbr',
	'buble-jsx-only',
	'rehype-accessible-emojis',
	'rehype-parse',
	'rehype-plaintext',
	'rehype-raw',
	'rehype-remark',
	'rehype-slug',
	'remark',
	'remark-mdx',
	'remark-mdx-to-plain-text',
	'remark-rehype',
	'remark-shiki-twoslash',
	'remark-smartypants',
	'remark-stringify',
];

const externalEntries = [
	'css-in-js-utils',
	'dedent',
	'fela',
	'fela-tools',
	'fela-utils',
	'md5',
	'node-object-hash',
	'rehype-parse',
	'remark',
	'remark-mdx',
	'remark-mdx-to-plain-text',
	'remark-stringify',
	'sharp',
	'strip-markdown',
	'typescript',
];

const shikiEntries = [
	'remark-shiki-twoslash',
	'shiki',
	'shiki/dist/highlighter',
	'shiki-languages',
	'shiki-twoslash',
	'unist-util-visit',
	'unist',
];

const config: SnowpackUserConfig = {
	packageOptions: {
		external: [
			...PREFIXED_NODE_BUILTIN_MODULES,
			...externalEntries,
			...markdownRelated,
			...shikiEntries,
		],

		knownEntrypoints: [...shikiEntries],
	},

	plugins: [
		path.resolve(cwd, './config/snowpack/plugins/social.cts'),
		path.resolve(cwd, './config/snowpack/plugins/fela.cts'),
	],
};

module.exports = config;
