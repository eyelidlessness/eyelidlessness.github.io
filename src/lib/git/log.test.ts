import it     from 'ava';
import crypto from 'crypto';
import fs     from 'fs';
import path   from 'path';
import {
  getInitialCommitDate,
  getFileHash,
} from './log';

const cwd = process.cwd();
const packageJSONPath = path.resolve(cwd, './package.json');
const knownUncommittedPath = path.resolve(cwd, './node_modules/.bin/microsite');

it('gets the first commit date of a file', (t) => {
  const date = getInitialCommitDate(packageJSONPath);

  t.assert(date instanceof Date);
  t.assert(date! > new Date('2020-09-30T00:00:00Z'));
  t.assert(date! < new Date('2020-10-10T00:00:00Z'));
});

it(`doesn't get a date for a file with no commit history`, (t) => {
  const date = getInitialCommitDate(knownUncommittedPath);

  t.is(date, null);
});

const validHashPattern = /^[0-9a-f]{40}$/;

it('gets the initial commit hash of the file', (t) => {
  const hash = getFileHash(packageJSONPath);

  t.assert(validHashPattern.test(hash));
  t.snapshot(hash);
});

it('gets a hash of the contents of a file with no commit history', (t) => {
  const hash = getFileHash(knownUncommittedPath);

  const contents = fs.readFileSync(knownUncommittedPath).toString();
  const expected = crypto
    .createHash('sha1')
    .update(contents)
    .digest('hex');

  t.assert(validHashPattern.test(hash));
  t.is(hash, expected);
});
