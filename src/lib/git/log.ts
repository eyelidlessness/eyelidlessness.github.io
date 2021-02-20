import childProcess from 'child_process';
import crypto       from 'crypto';
import fs           from 'fs';
import path         from 'path';

const cwd = process.cwd();

const resolveModulePath = (basePath: string) => (
  basePath.startsWith('/')
    ? path.resolve(
        cwd,
        basePath
          .replace(/^.*?\/src\//, './src/')
          .replace(/\.js$/, '.tsx')
      )
  : path.extname(basePath) == ''
    ? path.resolve(cwd, './src/pages/', `${basePath}.tsx`)
  : basePath
);

enum GitFilter {
  ALL     = '',
  CURRENT = '--diff-filter=M',
  FIRST   = '--diff-filter=A',
}

const singleResultGitFilters = new Set([
  GitFilter.CURRENT,
  GitFilter.FIRST,
] as const);

enum GitFormat {
  HASH     = '%H',
  ISO_DATE = '%aI',
}

interface FormattedGitLogDataOptions {
  readonly branch?: string;
  readonly filter?: GitFilter;
  readonly format:  string;
  readonly path?:   string;
  readonly remote?: string;
}

type FormattedGitLogData<T extends GitFilter> =
  T extends GitFilter.FIRST
    ? string
  : string[];

const DEFAULT_REMOTE_REF = 'origin';
const DEFAULT_BRANCH_REF = 'main';

export const getFormattedGitLogData = <T extends GitFilter = GitFilter.FIRST>(
  options: FormattedGitLogDataOptions
) => {
  const {
    branch = DEFAULT_BRANCH_REF,
    filter = GitFilter.FIRST,
    format,
    path   = cwd,
    remote = DEFAULT_REMOTE_REF,
  } = options;

  const isSingle = singleResultGitFilters.has(filter);
  const maxCountFlags = isSingle
    ? [ '--max-count=1' ]
    : [];

  const {
    error,
    stdout,
  } = childProcess.spawnSync('git', [
    'log',
    filter,
    ...maxCountFlags,
    `--branches=${branch}`,
    `--format=${format}`,
    `--remotes=${remote}`,
    '--',
    path
  ]);

  if (error) {
    throw error;
  }

  const output = stdout.toString().trim();

  if (output === '') {
    return null;
  }

  if (isSingle) {
    return output as FormattedGitLogData<T>;
  }

  return output.split('\n') as FormattedGitLogData<T>;
};

export const getCurrentCommitDate = (basePath: string): Date | null => {
  const path = resolveModulePath(basePath);
  const logData = getFormattedGitLogData({
    filter: GitFilter.CURRENT,
    format: GitFormat.ISO_DATE,
    path,
  });
  const date = new Date(logData ?? '');

  if (isNaN(date.getTime())) {
    return null;
  }

  return date;
};

export const getInitialCommitDate = (basePath: string): Date | null => {
  const path = resolveModulePath(basePath);
  const logData = getFormattedGitLogData({
    format: GitFormat.ISO_DATE,
    path,
  });
  const date = new Date(logData ?? '');

  if (isNaN(date.getTime())) {
    return null;
  }

  return date;
};

const getSHA1Hash = (path: string) => {
  const fileContents = fs.readFileSync(path).toString();

  let sha1Hash = crypto.createHash('sha1');

  sha1Hash.update(fileContents);

  return sha1Hash.digest('hex');
};

export const getCurrentFileHash = (basePath: string) => {
  const path = resolveModulePath(basePath);

  return (
    getFormattedGitLogData({
      filter: GitFilter.CURRENT,
      format: GitFormat.HASH,
      path,
    }) ??
    getSHA1Hash(path)
  );
};

export const getInitialFileHash = (basePath: string) => {
  const path = resolveModulePath(basePath);

  return (
    getFormattedGitLogData({
      format: GitFormat.HASH,
      path,
    }) ??
    getSHA1Hash(path)
  );
};

export const getCurrentCommitHash = () => {
  const {
    error,
    stdout,
  } = childProcess.spawnSync('git', [
    'rev-parse',
    'HEAD',
  ]);

  if (error) {
    throw error;
  }

  return stdout.toString().trim();
};
