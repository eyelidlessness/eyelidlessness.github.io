import fs from 'fs';
import hasher from 'node-object-hash';
import path from 'path';
import type { ComponentType } from 'preact';
import type { BlogArtProps } from '../../components/Blog/BlogArt.js';
import { RasterType } from '../art/raster.js';
import { Topic } from '../content/topics.js';
import {
  getCurrentCommitDate,
  getInitialCommitDate,
  getInitialMergeDate,
  getInitialFileHash,
  getInitialFileMergeHash,
  getSHA1Hash,
} from '../git/index.js';
import type { UniqueIdentifierFactory } from 'lib/styles/styles.js';

export const SOCIAL_IMAGE_DIMENSIONS = {
  height: 630,
  width:  1200,
};

export type PageSocialImageDimensions = typeof SOCIAL_IMAGE_DIMENSIONS;

const HOST = (
  process.env.EYELIDLESSNESS_HOST ??
  'https://eyelidlessness.github.io'
);

type PageSocialImage =
  & typeof SOCIAL_IMAGE_DIMENSIONS
  & {
    readonly absolutePath: string;
    readonly imageType:    RasterType;
    readonly publicPath:   string;
  };

export interface PageSocial {
  readonly image: PageSocialImage;
}

export interface PageStat {
  readonly created: Date;
  readonly updated: Date;
}

export interface CustomArtProps extends BlogArtProps {
  readonly identifier?:     UniqueIdentifierFactory;
  readonly renderType:      'listing' | 'meta' | 'post';
  readonly StylesProvider?: ComponentType;
}

export interface PageMetadata<Path extends string> {
  readonly CustomArt?: ComponentType<CustomArtProps>;
  readonly hash:       string;
  readonly host:       string;
  readonly pageId?:    string;
  readonly path:       Path;
  readonly redirect?:  string;
  readonly stat:       PageStat;
  readonly social:     PageSocial;
  readonly title:      string;
  readonly topics:     readonly Topic[];
}

const socialImageNameHasher = hasher({
  alg:    'sha1',
  coerce: true,
  sort:   true,
  trim:   true,
});

const getPageSocialMetadata = (
  importURL: string,
  hashSeed:  any,
  imageType: RasterType = RasterType.PNG,
  imageDimensions       = SOCIAL_IMAGE_DIMENSIONS
): PageSocial => {
  const imagesBasePath = importURL.replace(
    /^file:(\/\/)?(\/.*?)\/src\/.*$/,
    '$2/images'
  );
  const hash = socialImageNameHasher.hash(hashSeed);
  const absolutePath = path.resolve(
    imagesBasePath,
    `${hash}.${imageType}`
  );
  const publicPath = absolutePath.replace(/^.*?\/images\//, '/images/');

  return {
    image: {
      absolutePath,
      imageType,
      publicPath,
      ...imageDimensions,
    },
  };
};

export const PageMetadataType = {
  IMMUTABLE: 'immutable',
  IMMUTABLE_MERGE: 'immutable-merge',
  MUTABLE: 'mutable',
} as const;

type PageMetadataTypes = typeof PageMetadataType;

export type PageMetadataType = PageMetadataTypes[keyof PageMetadataTypes];

export const getPageMetadata = <Path extends string>(
  path:      Path,
  importURL: string,
  title:     string,
  type:      PageMetadataType,
  topics:    readonly Topic[] = [ Topic.TECHNOLOGY ]
): PageMetadata<Path> => {
  const isMutable        = type === PageMetadataType.MUTABLE;
  const isImmutableMerge = type === PageMetadataType.IMMUTABLE_MERGE;
  const importPath       = importURL.replace(/^file:(\/\/)?/, '');

  const hash = isMutable
    ? getSHA1Hash(importPath)
  : isImmutableMerge
    ? getInitialFileMergeHash(path)
    : getInitialFileHash(path);

  const stat = {
    created: (
      (
        isImmutableMerge
          ? getInitialMergeDate(path)
          : getInitialCommitDate(path)
      ) ??
      fs.statSync(importPath).ctime
    ),
    updated: (
      getCurrentCommitDate(path) ??
      fs.statSync(importPath).mtime
    ),
  };

  const pageSocialHashSeed = isMutable
    ? {
      importURL,
      stat,
      topics,
    }
    : {
      hash,
      importURL,
    };

  const social = getPageSocialMetadata(importURL, pageSocialHashSeed);

  return {
    hash,
    host: HOST,
    path,
    social,
    stat,
    title,
    topics,
  };
};
