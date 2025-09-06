import pluginNoOnlyTests from 'eslint-plugin-no-only-tests';
import { eslintConfig } from './config-factories.ts';

export const eslintConfig_test = eslintConfig({
	files: [
		'src/**/*.test.{ts,tsx}',
		'src/**/*.test-d.{ts,tsx}',
		'src/**/test-helpers.ts',
		'src/**/*-test-helpers.ts',
		'src/**/type-test-helpers.ts',
		'src/lib/test/**/*.{ts,tsx}',
	],
	plugins: {
		'no-only-tests': pluginNoOnlyTests,
	},
	rules: {
		'no-only-tests/no-only-tests': 'error',
	},
});
