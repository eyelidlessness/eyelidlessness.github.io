// @ts-check

// const glob = require('globby');
const path = require('path');

const cwd = process.cwd();

const externalEntries = [
  'css-in-js-utils',
  'dedent',
  'fela',
  'fela-tools',
  'fela-utils',
  'md5',
  'remark-mdx',
  'remark-mdx-to-plain-text',
  'strip-markdown',
  // 'preact-fela',
  // 'preact-render-to-string',
];

// const styleEntries = glob.sync(path.resolve(cwd, './src/lib/styles/**/*.{ts,tsx}'));

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
      // ...styleEntries,
    ],

    knownEntrypoints: [
      // ...externalEntries,
      ...shikiEntries,
      // ...styleEntries,
    ],
  },

  plugins: [
    path.resolve(cwd, './plugins/fela.cjs'),
  ],
};

module.exports = config;
