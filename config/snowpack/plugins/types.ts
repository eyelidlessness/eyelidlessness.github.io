import type { definePage } from 'microsite/page';
import type { ElementType } from 'preact';
import type { SnowpackPluginFactory } from 'snowpack';
import type * as blogArtModule from '../../../src/components/Blog/BlogArt.js';
import type * as rasterLib from '../../../src/lib/art/raster.js';
import type { PageMetadata } from '../../../src/lib/content/meta.js';
import type * as stylesLib from '../../../src/lib/styles/styles.js';

export type { ElementType };
export type PageDefinition = ReturnType<typeof definePage>;
export type AnyPage = ElementType | PageDefinition;
export type PluginFactory = SnowpackPluginFactory;

export type RasterLib = typeof rasterLib;
export type StylesLib = typeof stylesLib;
export type BlogArtModule = typeof blogArtModule;
export type { PageMetadata };
