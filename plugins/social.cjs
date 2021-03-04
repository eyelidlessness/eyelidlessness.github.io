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
    console.time('social');

    try {
      const glob  = require('globby');
      const path  = require('path');

      const pagePaths = glob.sync(
        path.resolve(buildDirectory, 'src/pages/**/*.js')
      );

      const { mkdirSync } = await import('fs');
      const { dirname }   = await import('path');

      const { h } = await import('preact');
      const documentPath = path.resolve(buildDirectory, 'src/pages/_document.js');

      const stylesPath = path.resolve(buildDirectory, 'src/lib/styles/styles.js');

      /** @type {import('../src/lib/styles/styles')} */
      const {
        createRenderer,
        createStylesProvider,
      } = await import(stylesPath);

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

      await Promise.all(pagePaths.map(async (pagePath) => {
        if (pagePath === documentPath) {
          return;
        }

        /** @type {AnyPage | null} */
        let page = null;

        try {
          /** @type {{default: AnyPage}} */
          page = (await import(pagePath)).default;
        }
        catch (error) {
          console.trace(pagePath, error);

          throw error;
        }

        if (page == null) {
          return;
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
          return;
        }

        const {
          renderer: styleRenderer,
        } = createRenderer();
        const StylesProvider = createStylesProvider(styleRenderer);

        const {
          CustomArt,
          hash,
          social: {
            image: {
              height,
              publicPath,
              width,
            },
          },
          title,
          topics,
        } = props;

        const artProps = {
          defsUsage: BlogArtDefsUsage.INLINE,
          hash,
          height:    280,
          rawSVG:    true,
          styleRenderer,
          StylesProvider,
          title,
          topics,
          width:     1200,
        };

        const rasterElement = (
          CustomArt != null
            ? h(CustomArt, {
                ...artProps,
                renderType: 'meta',
              })
            : h(StylesProvider, {},
                h(BlogArt, artProps)
              )
        );

        try {
          const artRaster = await generateRasterFromSVG({
            height,
            styleRenderer,
            svg:  rasterElement,
            type: RasterType.PNG,
            width,
          });

          const baseDistPath = path.resolve(process.cwd(), './dist');
          const distPath = path.resolve(baseDistPath, `.${publicPath}`);

          mkdirSync(dirname(distPath), {
            recursive: true,
          });
          writeFileSync(distPath, artRaster);
        }
        catch (error) {
          console.trace('unexpected error', pagePath, error, 'el', rasterElement);
        }
      }));
    }
    catch (error) {
      console.trace('unexpected error', error);

      throw error;
    }

    console.timeEnd('social');
  },
});

module.exports = pluginSocial;
