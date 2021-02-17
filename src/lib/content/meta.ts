import fs from 'fs';
import {
  getCurrentCommitDate,
  getInitialFileHash,
  getInitialCommitDate,
} from '@/lib/git';

export const getPageMetadata = <Path extends string>(
  path:      Path,
  importURL: string
) => {
  const hash = getInitialFileHash(path);
  const stat = {
    created: (
      getInitialCommitDate(path) ??
      fs.statSync(importURL.replace(/^file:(\/\/)?/, '')).ctime
    ),
    updated: (
      getCurrentCommitDate(path) ??
      fs.statSync(importURL.replace(/^file:(\/\/)?/, '')).mtime,
    ),
  };

  return {
    hash,
    stat,
  };
};
