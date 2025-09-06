import { eslintConfig } from '../config-factories.ts';

export const eslintConfig_optionsBase = eslintConfig({
	languageOptions: {
		parserOptions: {
			ecmaFeatures: {
				modules: true,
				jsx: true,
			},
			ecmaVersion: 'latest',
			project: ['./tsconfig.json', './config/tsconfig.json'],
		},
		sourceType: 'module',
	},

	linterOptions: {
		reportUnusedDisableDirectives: true,
		reportUnusedInlineConfigs: 'error',
	},
});
