import childProcess from 'node:child_process';
import crypto from 'node:crypto';
import fs from 'node:fs';
import { extname, resolve as resolvePath } from 'node:path';
import process from 'node:process';
import { identity } from '../helpers/values.js';

const cwd = process.cwd();

/**
 * Resolves runtime/build time modules to the original source file.
 *
 * @description
 * There are different points at which a module's file path will be passed:
 *
 * 1. The site's build plugins
 * 2. Microsite staging build
 * 3. Microsite static rendering
 *
 * Each step provides different base paths, and each a compiled `.js` file
 * extension. This resolves each of those cases to the original source file
 * path in version control.
 */
const resolveModulePath = (basePath: string) =>
	basePath.startsWith('/')
		? resolvePath(cwd, basePath.replace(/^.*?\/src\//, './src/').replace(/\.js$/, '.tsx'))
		: extname(basePath) == ''
			? resolvePath(cwd, './src/pages/', `${basePath}.tsx`)
			: basePath;

const GitFilter = {
	ALL: '',
	CURRENT: '--diff-filter=M',
	FIRST: '--diff-filter=A',
	FIRST_MERGE: '--full-history --reverse --merges',
} as const;

type GitFilters = typeof GitFilter;
type GitFilter = GitFilters[keyof GitFilters];

const GitFormat = {
	HASH: '%H',
	ISO_DATE: '%aI',
} as const;

type GitFormats = typeof GitFormat;
type GitFormat = GitFormats[keyof GitFormats];

type GitLogEntryDecoder<T> = (str: string) => T;

interface FormattedGitLogDataOptions<T> {
	readonly branch?: string;
	readonly decode: GitLogEntryDecoder<T>;
	readonly filter?: GitFilter;
	readonly format: string;
	readonly path?: string;
	readonly remote?: string;
}

const DEFAULT_REMOTE_REF = 'origin';
const DEFAULT_BRANCH_REF = 'main';

const getFormattedGitLogData = <T = string>(
	options: FormattedGitLogDataOptions<T>
): readonly T[] => {
	const {
		branch = DEFAULT_BRANCH_REF,
		decode,
		filter = GitFilter.FIRST,
		format,
		path = cwd,
		remote = DEFAULT_REMOTE_REF,
	} = options;

	const { error, stdout } = childProcess.spawnSync('git', [
		'log',
		...filter.split(' '),
		`--branches=${branch}`,
		`--format=${format}`,
		`--remotes=${remote}`,
		'--',
		path,
	]);

	if (error) {
		throw error;
	}

	const output = stdout.toString().trim();
	const entries = output === '' ? [] : output.split('\n');

	return entries.map<T>(decode);
};

const toDate = (str: string): Date | null => {
	const date = new Date(str);

	if (!isNaN(date.getTime())) {
		return date;
	}

	return null;
};

export const getCurrentCommitDate = (basePath: string): Date | null => {
	const path = resolveModulePath(basePath);
	const [date = null] = getFormattedGitLogData({
		decode: toDate,
		filter: GitFilter.CURRENT,
		format: GitFormat.ISO_DATE,
		path,
	});

	return date;
};

export const getInitialCommitDate = (basePath: string): Date | null => {
	const path = resolveModulePath(basePath);
	const [date = null] = getFormattedGitLogData({
		decode: toDate,
		format: GitFormat.ISO_DATE,
		path,
	});

	return date;
};

export const getInitialMergeDate = (basePath: string): Date | null => {
	const path = resolveModulePath(basePath);
	const [date = null] = getFormattedGitLogData({
		decode: toDate,
		filter: GitFilter.FIRST_MERGE,
		format: GitFormat.ISO_DATE,
		path,
	});

	return date;
};

export const getSHA1Hash = (path: string): string => {
	const fileContents = fs.readFileSync(path).toString();
	const sha1Hash = crypto.createHash('sha1');

	sha1Hash.update(fileContents);

	return sha1Hash.digest('hex');
};

export const getCurrentFileHash = (basePath: string): string => {
	const path = resolveModulePath(basePath);
	const [hash] = getFormattedGitLogData({
		decode: identity,
		filter: GitFilter.CURRENT,
		format: GitFormat.HASH,
		path,
	});

	return hash ?? getSHA1Hash(path);
};

export const getInitialFileHash = (basePath: string): string => {
	const path = resolveModulePath(basePath);
	const [hash] = getFormattedGitLogData({
		decode: identity,
		format: GitFormat.HASH,
		path,
	});

	return hash ?? getSHA1Hash(path);
};

export const getInitialFileMergeHash = (basePath: string): string => {
	const path = resolveModulePath(basePath);
	const [hash] = getFormattedGitLogData({
		decode: identity,
		filter: GitFilter.FIRST_MERGE,
		format: GitFormat.HASH,
		path,
	});

	return hash ?? getSHA1Hash(path);
};

export const getCurrentCommitHash = (): string => {
	const { error, stdout } = childProcess.spawnSync('git', ['rev-parse', 'HEAD']);

	if (error) {
		throw error;
	}

	return stdout.toString().trim();
};
