import type NodePath from 'node:path';
import type { SnowpackUserConfig } from 'snowpack';
import type * as Constants from '../common/constants.ts';

const { PREFIXED_NODE_BUILTIN_MODULES } =
	require('../common/constants.ts') as typeof Constants;
const path = require('node:path') as typeof NodePath;
const cwd = process.cwd();

const externalEntries = [
	'css-in-js-utils',
	'dedent',
	'fela',
	'fela-tools',
	'fela-utils',
	'globby',
	'md5',
	'node-object-hash',
	'rehype-parse',
	'remark',
	'remark-mdx',
	'remark-mdx-to-plain-text',
	'remark-stringify',
	'sharp',
	'strip-markdown',
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
			'@mdx-js/mdx',
			'@mdx-js/preact',
			'buble-jsx-only',
			'typescript',
			...externalEntries,
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
