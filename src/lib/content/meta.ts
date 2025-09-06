import { hasher } from 'node-object-hash';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import type { ComponentType } from 'preact';
import type { BlogArtProps } from '../../components/Blog/BlogArt.js';
import { RasterType } from '../art/raster.js';
import { Topic } from '../content/topics.js';
import {
	getCurrentCommitDate,
	getInitialCommitDate,
	getInitialFileHash,
	getInitialFileMergeHash,
	getInitialMergeDate,
	getSHA1Hash,
} from '../git/index.js';
import type { UniqueIdentifierFactory } from '../styles/styles.js';

export const SOCIAL_IMAGE_DIMENSIONS = {
	height: 630,
	width: 1200,
};

export type PageSocialImageDimensions = typeof SOCIAL_IMAGE_DIMENSIONS;

const HOST = process.env.EYELIDLESSNESS_HOST ?? 'https://eyelidlessness.github.io';

type PageSocialImage = typeof SOCIAL_IMAGE_DIMENSIONS & {
	readonly absolutePath: string;
	readonly imageType: RasterType;
	readonly publicPath: string;
};

export interface PageSocial {
	readonly image: PageSocialImage;
}

export interface PageStat {
	readonly created: Date;
	readonly updated: Date;
}

export interface CustomArtProps extends BlogArtProps {
	readonly identifier?: UniqueIdentifierFactory;
	readonly renderType: 'listing' | 'meta' | 'post';
	readonly StylesProvider?: ComponentType;
}

export interface PageMetadata<Path extends string = string> {
	readonly CustomArt?: ComponentType<CustomArtProps>;
	readonly hash: string;
	readonly host: string;
	readonly pageId?: string;
	readonly path: Path;
	readonly redirect?: string;
	readonly stat: PageStat;
	readonly social: PageSocial;
	readonly title: string;
	readonly topics: readonly Topic[];
}

const socialImageNameHasher = hasher({
	alg: 'sha1',
	coerce: true,
	sort: true,
	trim: true,
});

const getPageSocialMetadata = (
	importURL: string,
	hashSeed: unknown,
	imageType: RasterType = RasterType.PNG,
	imageDimensions = SOCIAL_IMAGE_DIMENSIONS
): PageSocial => {
	const imagesBasePath = importURL.replace(/^file:(\/\/)?(\/.*?)\/src\/.*$/, '$2/images');
	const hash = socialImageNameHasher.hash(hashSeed);
	const absolutePath = path.resolve(imagesBasePath, `${hash}.${imageType}`);
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
	pagePath: Path,
	importURL: string,
	title: string,
	type: PageMetadataType,
	topics: readonly Topic[] = [Topic.TECHNOLOGY]
): PageMetadata<Path> => {
	const isMutable = type === PageMetadataType.MUTABLE;
	const isImmutableMerge = type === PageMetadataType.IMMUTABLE_MERGE;
	const importPath = importURL.replace(/^file:(\/\/)?/, '');

	const hash = isMutable
		? getSHA1Hash(importPath)
		: isImmutableMerge
			? getInitialFileMergeHash(pagePath)
			: getInitialFileHash(pagePath);

	const stat = {
		created:
			(isImmutableMerge
				? getInitialMergeDate(pagePath)
				: getInitialCommitDate(pagePath)) ?? fs.statSync(importPath).ctime,
		updated: getCurrentCommitDate(pagePath) ?? fs.statSync(importPath).mtime,
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
		path: pagePath,
		social,
		stat,
		title,
		topics,
	};
};
