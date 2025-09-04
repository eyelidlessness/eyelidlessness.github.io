import type { ElementType } from 'preact';
import type { definePage } from 'microsite/page';
import type { SnowpackPluginFactory } from 'snowpack';
import * as blogArtModule from '../../../src/components/Blog/BlogArt.js';
import type * as rasterLib from '../../../src/lib/art/raster.js';
import type * as stylesLib from '../../../src/lib/styles/styles.js';
import type { PageMetadata } from '../../../src/lib/content/meta.js';

export type { ElementType };
export type PageDefinition = ReturnType<typeof definePage>;
export type AnyPage = ElementType | PageDefinition;
export type PluginFactory = SnowpackPluginFactory;

export type RasterLib = typeof rasterLib;
export type StylesLib = typeof stylesLib;
export type BlogArtModule = typeof blogArtModule;
export type { PageMetadata };
