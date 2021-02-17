import fs from 'fs';
import {
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
  };

  return {
    hash,
    stat,
  };
};
