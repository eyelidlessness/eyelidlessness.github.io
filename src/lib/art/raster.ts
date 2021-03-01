
import {
  renderToString as renderStylesToString,
} from 'fela-tools';
import {
  ComponentChildren,
  Fragment,
  h,
} from 'preact';
import { renderToString } from 'preact-render-to-string';
import sharp              from 'sharp';
import {
  IRenderer,
  theme,
} from '@/lib/styles';

export enum RasterType {
  PNG = 'png',
}

interface GenerateRasterFromSVGOptions {
  readonly height:        number;
  readonly styleRenderer: IRenderer;
  readonly svg:           ComponentChildren;
  readonly type:          RasterType;
  readonly width:         number;
}

export const generateRasterFromSVG = async (
  options: GenerateRasterFromSVGOptions
) => {
  const {
    height,
    styleRenderer,
    svg: node,
    type,
    width,
  } = options;
  const rendered = renderToString(
    h(Fragment, {}, node)
  ).trim();

  if (!rendered.startsWith('<svg')) {
    throw new Error('`node` must be an SVG component');
  }

  const styles = renderToString(
    h('style', {
      dangerouslySetInnerHTML: {
        __html: renderStylesToString(styleRenderer),
      },
    })
  );
  const styled = rendered.replace(
    /<\/svg>(<undefined><\/undefined>)?/,
    `${styles}</svg>`
  );

  const imageBuffer = Buffer.from(styled);
  const base = await sharp({
    create: {
      background: theme.document.backgroundColor,
      channels:   3,
      height,
      width,
    },
  })
    [type]()
    .toBuffer();

  try {
    return await sharp(base)
      .composite([
        {
          blend: 'over',
          input: imageBuffer,
        },
      ])
      [type]()
      .toBuffer();
  }
  catch (error) {
    console.trace(
      'unexpected error',
      error,
      'rendered svg',
      rendered
    );
  }
};
