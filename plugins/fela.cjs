// @ts-check

/**
 * @typedef {import('preact').ComponentType} ComponentType
 * @typedef {{Component: ComponentType}}     PageDefinition
 * @typedef {ComponentType | PageDefinition} AnyPage
 */

/**
 * @param {AnyPage} page
 * @returns {ComponentType}
 */
const getPageComponent = (page) => (
  (
    typeof page === 'object' &&
    page.Component != null
  )
    ? page.Component
  : (typeof page === 'function')
    ? page
    : () => null
);

/**
 * @type {import('snowpack').SnowpackPluginFactory}
 */
const pluginFela = () => ({
  name: 'plugin-fela',

  async optimize({ buildDirectory }) {
    const glob  = require('globby');
    const path  = require('path');
    const pages = glob.sync(
      path.resolve(buildDirectory, 'src/pages/**/*.js')
    );

    for (const pagePath of pages) {
      /** @type {{default: AnyPage}} */
      const {
        default: page
      } = (await import(pagePath));

      // TODO 2021-01-28: Render the page in case anything is declared dynamically?
      // const { h } = require('preact');
      // const render = require('preact-render-to-string');

      // const Page = getPageComponent(page);
      // await render(h(Page, {}));
    }

    const stylesPath = path.resolve(buildDirectory, 'src/lib/styles/styles.js');

    /** @type {import('../src/lib/styles/styles')} */
    const { writeCurrentStyles } = await import(stylesPath);

    await writeCurrentStyles();
  },
});

module.exports = pluginFela;
