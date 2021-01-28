// @ts-check

const path = require('path');

/** @type {import('snowpack').SnowpackUserConfig} */
const config = {
  plugins: [
    path.resolve(process.cwd(), './plugins/fela.cjs'),
  ],
};

module.exports = config;
