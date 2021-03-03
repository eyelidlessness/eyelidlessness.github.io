import fs                from 'fs';
import hasher            from 'node-object-hash';
import path              from 'path';
import { ComponentType } from 'preact';
import { BlogArtProps }  from '@/components/Blog';
import { RasterType }    from '@/lib/art';
import { Topic }         from '@/lib/content/topics';
import {
  getCurrentCommitDate,
  getInitialCommitDate,
  getInitialFileHash,
  getSHA1Hash,
} from '@/lib/git';

export const SOCIAL_IMAGE_DIMENSIONS = {
  height: 630,
  width:  1200,
} as const;

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

interface PageSocial {
  readonly image: PageSocialImage;
}

export interface PageStat {
  readonly created: Date;
  readonly updated: Date;
}

export interface CustomArtProps extends BlogArtProps {
  readonly identifier?:     () => string;
  readonly renderType:      'listing' | 'meta' | 'post';
  readonly StylesProvider?: ComponentType;
}

export interface PageMetadata<Path extends string> {
  readonly CustomArt?: ComponentType<CustomArtProps>;
  readonly hash:       string;
  readonly host:       string;
  readonly path:       Path;
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
  imageType: RasterType = RasterType.PNG
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
      ...SOCIAL_IMAGE_DIMENSIONS,
    },
  };
};

export enum PageMetadataType {
  IMMUTABLE = 'immutable',
  MUTABLE   = 'mutable',
}

export const getPageMetadata = <Path extends string>(
  path:      Path,
  importURL: string,
  title:     string,
  type:      PageMetadataType,
  topics:    readonly Topic[] = [ Topic.TECHNOLOGY ]
): PageMetadata<Path> => {
  const isMutable  = type === PageMetadataType.MUTABLE;
  const importPath = importURL.replace(/^file:(\/\/)?/, '');

  const hash = isMutable
    ? getSHA1Hash(importPath)
    : getInitialFileHash(path);

  const stat = {
    created: (
      getInitialCommitDate(path) ??
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
