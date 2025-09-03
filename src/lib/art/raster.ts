
import {
  renderToString as renderStylesToString,
} from 'fela-tools';
import type { ComponentChildren } from 'preact';
import {
  Fragment,
  h,
} from 'preact';
import { renderToString } from 'preact-render-to-string';
import sharp from 'sharp';
import type { IRenderer } from '../styles/styles.js';
import { theme } from '../styles/theme.js';

export const RasterType = {
  PNG: 'png',
} as const;

type RasterTypes = typeof RasterType;

export type RasterType = RasterTypes[keyof RasterTypes];

interface GenerateRasterFromSVGOptions {
  readonly debug?:        boolean;
  readonly height:        number;
  readonly styleRenderer: IRenderer;
  readonly svg:           ComponentChildren;
  readonly type:          RasterType;
  readonly width:         number;
}

export const generateRasterFromSVG = async (
  options: GenerateRasterFromSVGOptions
): Promise<Buffer | null> => {
  const {
    debug,
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

  if (debug) {
    console.log('styled', styled);
  }

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

    return null;
  }
};
