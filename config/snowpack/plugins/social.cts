import type {
  AnyPage,
  BlogArtModule,
  PageMetadata,
  PluginFactory,
  RasterLib,
  StylesLib,
} from './types.js';

const fs = require('node:fs') as typeof import('node:fs');
const path = require('node:path') as typeof import('node:path');

const pluginSocial: PluginFactory = () => ({
  name: 'plugin-social',

  async optimize({ buildDirectory }) {
    console.time('social');

    try {
      const pagePaths = fs.globSync(
        path.resolve(buildDirectory, 'src/pages/**/*.js')
      );

      const { h } = await import('preact');
      const documentPath = path.resolve(buildDirectory, 'src/pages/_document.js');

      const stylesPath = path.resolve(buildDirectory, 'src/lib/styles/styles.js');
      const {
        createRenderer,
        createStylesProvider,
      } = await import(stylesPath) as StylesLib;

      const rasterPath = path.resolve(buildDirectory, 'src/lib/art/raster.js');
      const {
        generateRasterFromSVG,
        RasterType,
      } = await import(rasterPath) as RasterLib;

      const blogArtPath = path.resolve(
        buildDirectory,
        'src/components/Blog/BlogArt.js'
      );
      const {
        BlogArt,
        BlogArtDefsUsage,
      } = await import(blogArtPath) as BlogArtModule;

      await Promise.all(pagePaths.map(async (pagePath) => {
        if (pagePath === documentPath) {
          return;
        }

        let page: AnyPage | null = null;

        try {
          page = ((await import(pagePath)) as { default: AnyPage }).default;
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

        const props: PageMetadata<string> | null = (
          typeof staticProps === 'object' && staticProps != null
            ? staticProps.props
            : null
        );

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

          if (artRaster == null) {
            throw new Error('Failed to generate raster image for art');
          }

          const baseDistPath = path.resolve(process.cwd(), './dist');
          const distPath = path.resolve(baseDistPath, `.${publicPath}`);

          fs.mkdirSync(path.dirname(distPath), {
            recursive: true,
          });
          fs.writeFileSync(distPath, new Uint8Array(artRaster), { encoding: null});
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
