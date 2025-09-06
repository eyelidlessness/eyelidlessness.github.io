import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, rmSync } from 'node:fs';
import { resolve as resolvePath } from 'node:path';
import { argv, cwd, exit } from 'node:process';
import { fileURLToPath } from 'node:url';

const CWD = cwd();
const MICROSITE_CACHE_DIR = resolvePath(CWD, '.microsite/cache');
const MICROSITE_SSR_DIR = resolvePath(CWD, '.microsite/ssr');
const MICROSITE_STAGING_DIR = resolvePath(CWD, '.microsite/staging');
const DIST_DIR = resolvePath(CWD, 'dist');

const MICROSITE_TEMP_PATHS = [
	MICROSITE_CACHE_DIR,
	MICROSITE_SSR_DIR,
	MICROSITE_STAGING_DIR,
];

const MICROSITE_REQUIRED_PATHS = [...MICROSITE_TEMP_PATHS, DIST_DIR];

const rmRf = (path: string): void => {
	rmSync(path, {
		recursive: true,
		force: true,
	});
};

const pre = () => {
	rmRf(DIST_DIR);

	for (const path of MICROSITE_REQUIRED_PATHS) {
		mkdirSync(path, { recursive: true });
	}
};

const MICROSITE_BIN = resolvePath(CWD, 'node_modules/.bin/microsite');

interface BuildResult {
	readonly status: number | null;
	readonly error?: Error | undefined;
}

const build = (): BuildResult => {
	const { status, error } = spawnSync(MICROSITE_BIN, ['build', '--no-clean'], {
		stdio: 'inherit',
	});

	return { error, status };
};

const post = () => {
	for (const path of MICROSITE_TEMP_PATHS) {
		if (existsSync(path)) {
			rmRf(path);
		}
	}
};

const main = () => {
	pre();
	const { status, error } = build();
	if (status !== 0 || error != null) {
		// eslint-disable-next-line no-console
		console.error('Microsite build error!', error ?? new Error('Unknown build error'));
		exit(status ?? 1);
	}

	post();
};

const IS_MAIN = argv[1] === fileURLToPath(import.meta.url);

if (IS_MAIN) {
	main();
}
