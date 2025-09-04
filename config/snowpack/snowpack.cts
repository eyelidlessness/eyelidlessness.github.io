import type { SnowpackUserConfig } from 'snowpack';

const {
  resolve: resolvePath,
} = require('node:path') as typeof import('node:path');
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
      '@mdx-js/mdx',
      '@mdx-js/preact',
      'buble-jsx-only',
      'typescript',
      ...externalEntries,
      ...shikiEntries,
    ],

    knownEntrypoints: [
      ...shikiEntries,
    ],
  },

  plugins: [
    resolvePath(cwd, './config/snowpack/plugins/social.cts'),
    resolvePath(cwd, './config/snowpack/plugins/fela.cts'),
  ],
};

module.exports = config;
