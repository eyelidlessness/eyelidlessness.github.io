// @ts-check

const path = require('path');

/** @type {import('snowpack').SnowpackUserConfig} */
const config = {
  packageOptions: {
    external: [
      'typescript',
    ],
  },

  plugins: [
    path.resolve(process.cwd(), './plugins/fela.cjs'),
  ],
};

module.exports = config;
