import childProcess from 'child_process';
import crypto       from 'crypto';
import fs           from 'fs';
import path         from 'path';

const cwd = process.cwd();

enum GitFilter {
  ALL   = '',
  FIRST = '--diff-filter=A',
}

enum GitFormat {
  HASH     = '%H',
  ISO_DATE = '%aI',
}

interface FormattedGitLogDataOptions {
  readonly filter?: GitFilter;
  readonly format:  string;
  readonly path?:   string;
}

type FormattedGitLogData<T extends GitFilter> =
  T extends GitFilter.FIRST
    ? string
  : string[];

export const getFormattedGitLogData = <T extends GitFilter = GitFilter.FIRST>(
  options: FormattedGitLogDataOptions
) => {
  const {
    filter = GitFilter.FIRST,
    format,
    path = cwd,
  } = options;
  const {
    error,
    stdout,
  } = childProcess.spawnSync('git', [
    'log',
    filter,
    `--format=${format}`,
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

  if (filter === GitFilter.FIRST) {
    return output as FormattedGitLogData<T>;
  }

  return output.split('\n') as FormattedGitLogData<T>;
};

export const getInitialCommitDate = (path: string): Date | null => {
  const logData = getFormattedGitLogData({
    format: GitFormat.ISO_DATE,
    path,
  });
  const date    = new Date(logData ?? '');

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

export const getFileHash = (basePath: string) => {
  const modulePath = basePath.startsWith('/')
    ? path.resolve(
        cwd,
        basePath
          .replace(/^.*?\/src\//, './src/')
          .replace(/\.js$/, '.tsx')
      )
    : path.resolve(cwd, './src/pages/', `${basePath}.tsx`);

  return (
    getFormattedGitLogData({
      format: GitFormat.HASH,
      path:   modulePath,
    }) ??
    getSHA1Hash(basePath)
  );
};
