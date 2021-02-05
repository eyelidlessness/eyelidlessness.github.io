// @ts-check

/// <reference path="../typings/preact/index.d.ts" />

/**
 * @typedef {import('preact').ElementType} ElementType
 * @typedef {ReturnType<import('microsite/page').definePage>} PageDefinition
 * @typedef {ElementType | PageDefinition} AnyPage
 */

/**
 * @param {AnyPage} page
 * @returns {ElementType}
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

    let pages = glob.sync(
      path.resolve(buildDirectory, 'src/pages/**/*.js')
    );

    const { h } = await import('preact');
    const { default: render } = await import('preact-render-to-string');
    const documentPath = path.resolve(buildDirectory, 'src/pages/_document.js');

    for (const pagePath of pages) {
      if (pagePath === documentPath) {
        continue;
      }

      /** @type {AnyPage | null} */
      let page = null;

      try {
        /** @type {{default: AnyPage}} */
        page = (await import(pagePath)).default;
      }
      catch (error) {
        console.trace(error);

        throw error;
      }

      if (page == null) {
        continue;
      }

      const Page = getPageComponent(page);

      const staticProps = (
        (typeof page === 'object' && typeof page.getStaticProps === 'function')
          ? await page.getStaticProps({
            params: {},
            path:   pagePath,
          })
          : { props: {} }
      );

      const props = typeof staticProps === 'object'
        ? staticProps.props
        : {};

      try {
        // @ts-ignore
        await render(h(Page, props));
      }
      catch (error) {
        console.trace(pagePath, error);

        throw error;
      }
    }

    const stylesPath = path.resolve(buildDirectory, 'src/lib/styles/styles.js');

    /** @type {import('../src/lib/styles/styles')} */
    const { writeCurrentStyles } = await import(stylesPath);

    await writeCurrentStyles();
  },
});

module.exports = pluginFela;
