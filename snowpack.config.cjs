// @ts-check

const path = require('path');
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
  'remark-mdx',
  'remark-mdx-to-plain-text',
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

/** @type {import('snowpack').SnowpackUserConfig} */
const config = {
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
    path.resolve(cwd, './plugins/social.cjs'),
    path.resolve(cwd, './plugins/fela.cjs'),
  ],
};

module.exports = config;
