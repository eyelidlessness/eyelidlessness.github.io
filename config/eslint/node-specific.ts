import { RESTRICTED_COMMONJS_GLOBALS } from '../common/constants.ts';
import { eslintConfig } from './config-factories.ts';

export const eslintConfig_commonjs = eslintConfig({
	files: ['**/*.{cjs,cts}'],
	rules: {
		'no-restricted-globals': [
			'error',
			...RESTRICTED_COMMONJS_GLOBALS.map((name) => {
				return { name };
			}),
		],
		'@typescript-eslint/no-require-imports': 'off',
	},
});
