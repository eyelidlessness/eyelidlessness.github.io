import fs             from 'fs';
import hasher         from 'node-object-hash';
import path           from 'path';
import { RasterType } from '@/lib/art';
import { Topic }      from '@/lib/content/topics';
import {
  getCurrentCommitDate,
  getCurrentFileHash,
  getInitialCommitDate,
  getInitialFileHash,
} from '@/lib/git';

const SOCIAL_IMAGE_DIMENSIONS = {
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

export interface PageMetadata<Path extends string> {
  readonly hash:   string;
  readonly host:   string;
  readonly path:   Path;
  readonly stat:   PageStat;
  readonly social: PageSocial;
  readonly title:  string;
  readonly topics: readonly Topic[];
}

const socialImageNameHasher = hasher({
  alg:    'sha1',
  coerce: true,
  sort:   true,
  trim:   true,
});

type PageSocialStatKey = keyof PageStat;

const getPageSocialMetadata = (
  importURL: string,
  hashSeed:  any,
  imageType: RasterType = RasterType.PNG
): PageSocial => {
  const publicBasePath = importURL.replace(
    /^file:(\/\/)?(\/.*?)\/src\/.*$/,
    '$2/public'
  );
  const hash = socialImageNameHasher.hash(hashSeed);
  const absolutePath = path.resolve(
    publicBasePath,
    `${hash}.${imageType}`
  );
  const publicPath = absolutePath.replace(/^.*?\/public\//, '/');

  return {
    image: {
      absolutePath,
      imageType,
      publicPath,
      ...SOCIAL_IMAGE_DIMENSIONS,
    },
  };
};

/**
 * @param statKey - Use 'updated' to get metadata relevant to the current state,
 *                  or 'created' to get the metadata for the state at first commit
 */
export const getPageMetadata = <Path extends string>(
  path:      Path,
  importURL: string,
  title:     string,
  topics:    readonly Topic[]  = [ Topic.TECHNOLOGY ],
  statKey:   PageSocialStatKey = 'updated'
): PageMetadata<Path> => {
  const isInitialStatKey = statKey === 'created';
  const hash = isInitialStatKey
    ? getInitialFileHash(path)
    : getCurrentFileHash(path);

  const stat = {
    created: (
      getInitialCommitDate(path) ??
      fs.statSync(importURL.replace(/^file:(\/\/)?/, '')).ctime
    ),
    updated: (
      getCurrentCommitDate(path) ??
      fs.statSync(importURL.replace(/^file:(\/\/)?/, '')).mtime
    ),
  };

  const pageSocialHashSeed = isInitialStatKey
    ? {
      hash,
      importURL,
    }
    : {
      importURL,
      stat,
      topics,
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
