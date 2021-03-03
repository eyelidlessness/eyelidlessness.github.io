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
    console.time('fela');

    const glob  = require('globby');
    const path  = require('path');

    const {
      h,
      Fragment,
    } = await import('preact');
    const { default: render } = await import('preact-render-to-string');
    const documentPath = path.resolve(buildDirectory, 'src/pages/_document.js');

    const pagePaths = glob.sync(
      path.resolve(buildDirectory, 'src/pages/**/*.js')
    ).filter((pagePath) => (
      pagePath !== documentPath
    ));

    const pages = await Promise.all(pagePaths.map(async (pagePath) => {
      /** @type {{default: AnyPage}} */
      const {
        default: page,
      } = await import(pagePath);

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

      // @ts-ignore
      return h(Page, props);
    }));

    try {
      await render(h(Fragment, {}, ...pages));
    }
    catch (error) {
      console.trace(error);

      throw error;
    }

    const stylesPath = path.resolve(buildDirectory, 'src/lib/styles/styles.js');

    /** @type {import('../src/lib/styles/styles')} */
    const { writeCurrentStyles } = await import(stylesPath);

    await writeCurrentStyles();

    console.timeEnd('fela');

    // const allPages = h()

    // for (const pagePath of pagePaths) {
    //   if (pagePath === documentPath) {
    //     continue;
    //   }

    //   /** @type {AnyPage | null} */
    //   let page = null;

    //   try {
    //     /** @type {{default: AnyPage}} */
    //     page = (await import(pagePath)).default;
    //   }
    //   catch (error) {
    //     console.trace(pagePath, error);

    //     throw error;
    //   }

    //   if (page == null) {
    //     continue;
    //   }

    //   const Page = getPageComponent(page);

    //   const staticProps = (
    //     (typeof page === 'object' && typeof page.getStaticProps === 'function')
    //       ? await page.getStaticProps({
    //         params: {},
    //         path:   pagePath,
    //       })
    //       : { props: {} }
    //   );

    //   const props = typeof staticProps === 'object'
    //     ? staticProps.props
    //     : {};

    //   try {
    //     // @ts-ignore
    //     await render(h(Page, props));
    //   }
    //   catch (error) {
    //     console.trace(pagePath, error);

    //     throw error;
    //   }
    // }

    // const stylesPath = path.resolve(buildDirectory, 'src/lib/styles/styles.js');

    // /** @type {import('../src/lib/styles/styles')} */
    // const { writeCurrentStyles } = await import(stylesPath);

    // await writeCurrentStyles();
  },
});

module.exports = pluginFela;
