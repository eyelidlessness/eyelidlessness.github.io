import { readFile } from 'node:fs/promises';
import { PRETTIER_IGNORE_PATH } from '../common/constants.ts';

const ignoresSource = await readFile(PRETTIER_IGNORE_PATH, 'utf-8');

const ignores = ignoresSource
	.replaceAll(/^#[^\n]+\n/g, '')
	.replaceAll(/\n{2,}/g, '\n')
	.split('\n');

export const ignoresConfig = { ignores } as const;
