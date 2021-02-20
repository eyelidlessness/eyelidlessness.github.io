// @ts-check

/// <reference path="../typings/preact/index.d.ts" />

const { writeFileSync } = require('fs');

/**
 * @typedef {import('preact').ElementType} ElementType
 * @typedef {ReturnType<import('microsite/page').definePage>} PageDefinition
 * @typedef {ElementType | PageDefinition} AnyPage
 */

/**
 * @type {import('snowpack').SnowpackPluginFactory}
 */
const pluginSocial = () => ({
  name: 'plugin-social',

  async optimize({ buildDirectory }) {
    const glob  = require('globby');
    const path  = require('path');

    let pages = glob.sync(
      path.resolve(buildDirectory, 'src/pages/**/*.js')
    );

    const { mkdirSync } = await import('fs');
    const { dirname }   = await import('path');

    const { h } = await import('preact');
    const documentPath = path.resolve(buildDirectory, 'src/pages/_document.js');

    const stylesPath = path.resolve(buildDirectory, 'src/lib/styles/styles.js');
    /** @type {import('../src/lib/styles/styles')} */
    const { createRenderer } = await import(stylesPath);

    const rasterPath = path.resolve(buildDirectory, 'src/lib/art/raster.js');
    /** @type {import('../src/lib/art/raster')} */
    const {
      generateRasterFromSVG,
      RasterType,
    } = await import(rasterPath);

    const blogArtPath = path.resolve(
      buildDirectory,
      'src/components/Blog/BlogArt.js'
    );
    /** @type {import('../src/components/Blog/BlogArt')} */
    const {
      BlogArt,
      BlogArtDefsUsage,
    } = await import(blogArtPath);

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

      const staticProps = (
        (typeof page === 'object' && typeof page.getStaticProps === 'function')
          ? await page.getStaticProps({
            params: {},
            path:   pagePath,
          })
          : { props: {} }
      );

      /** @type {import('../src/lib/content/meta').PageMetadata<any> | null} */
      const props = typeof staticProps === 'object'
        ? staticProps.props
        : null;

      if (props == null) {
        continue;
      }

      const {
        renderer: styleRenderer,
      } = createRenderer();

      const {
        hash,
        social: {
          image: {
            absolutePath,
            height,
            width,
          },
        },
        title,
        topics,
      } = props;

      const artRaster = await generateRasterFromSVG({
        height,
        styleRenderer,

        svg: (
          h(BlogArt, {
            defsUsage: BlogArtDefsUsage.INLINE,
            hash,
            height: 280,
            rawSVG:    true,
            styleRenderer,
            title,
            topics,
            width:  1200,
          })
        ),

        type: RasterType.PNG,

        width,
      });

      mkdirSync(dirname(absolutePath), {
        recursive: true,
      });
      writeFileSync(absolutePath, artRaster);
    }
  },
});

module.exports = pluginSocial;
